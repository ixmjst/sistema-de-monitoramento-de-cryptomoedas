<?php

namespace App\Controllers;

use App\Models\Portfolio;
use App\Middleware\AuthMiddleware;

class ExportController extends BaseController
{
    private $portfolioModel;

    public function __construct()
    {
        parent::__construct();
        $this->portfolioModel = new Portfolio();
    }

    public function csv()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        try {
            $portfolio = $this->portfolioModel->getUserPortfolio($user['id']);

            header('Content-Type: text/csv; charset=utf-8');
            header('Content-Disposition: attachment; filename="portfolio_' . date('Y-m-d') . '.csv"');

            $output = fopen('php://output', 'w');

            // Add BOM for UTF-8
            fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

            // Headers
            fputcsv($output, [
                'Cryptocurrency',
                'Symbol',
                'Quantity',
                'Purchase Price',
                'Current Price',
                'Total Investment',
                'Current Value',
                'Profit/Loss',
                'Profit/Loss %'
            ]);

            // Data
            foreach ($portfolio as $item) {
                $currentValue = $item['quantity'] * ($item['current_price'] ?? $item['purchase_price']);
                $totalInvestment = $item['quantity'] * $item['purchase_price'];
                $profitLoss = $currentValue - $totalInvestment;
                $profitLossPercentage = ($totalInvestment > 0) ? ($profitLoss / $totalInvestment) * 100 : 0;

                fputcsv($output, [
                    $item['name'],
                    $item['symbol'],
                    number_format($item['quantity'], 8),
                    number_format($item['purchase_price'], 8),
                    number_format($item['current_price'] ?? $item['purchase_price'], 8),
                    number_format($totalInvestment, 2),
                    number_format($currentValue, 2),
                    number_format($profitLoss, 2),
                    number_format($profitLossPercentage, 2) . '%'
                ]);
            }

            fclose($output);
            exit;
        } catch (\Exception $e) {
            $this->error('Failed to export CSV: ' . $e->getMessage(), 500);
        }
    }

    public function pdf()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        try {
            $portfolio = $this->portfolioModel->getUserPortfolio($user['id']);

            $html = $this->buildPdfHtml($user, $portfolio);

            header('Content-Type: text/html; charset=utf-8');
            header('Content-Disposition: inline; filename="portfolio_' . date('Y-m-d') . '.html"');
            echo $html;
            exit;
        } catch (\Exception $e) {
            $this->error('Failed to export PDF: ' . $e->getMessage(), 500);
        }
    }

    private function buildPdfHtml($user, $portfolio)
    {
        $rows = '';
        $totalValue = 0;
        $totalInvestment = 0;

        foreach ($portfolio as $item) {
            $currentValue = $item['quantity'] * ($item['current_price'] ?? $item['purchase_price']);
            $totalInv = $item['quantity'] * $item['purchase_price'];
            $profitLoss = $currentValue - $totalInv;
            $plClass = $profitLoss >= 0 ? 'positive' : 'negative';

            $totalValue += $currentValue;
            $totalInvestment += $totalInv;

            $rows .= "<tr>
                <td>{$item['name']}</td>
                <td>{$item['symbol']}</td>
                <td class=\"num\">" . number_format($item['quantity'], 8) . "</td>
                <td class=\"num\">$" . number_format($item['purchase_price'], 2) . "</td>
                <td class=\"num\">$" . number_format($item['current_price'] ?? $item['purchase_price'], 2) . "</td>
                <td class=\"num\">$" . number_format($totalInv, 2) . "</td>
                <td class=\"num\">$" . number_format($currentValue, 2) . "</td>
                <td class=\"num $plClass\">" . ($profitLoss >= 0 ? '+' : '') . "$" . number_format($profitLoss, 2) . "</td>
            </tr>";
        }

        $overallPL = $totalValue - $totalInvestment;
        $overallPLClass = $overallPL >= 0 ? 'positive' : 'negative';

        return "<!DOCTYPE html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
<title>Portfolio Report - CryptoMonitor</title>
<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        margin: 0; padding: 40px;
        color: #1a202c; background: #f8fafc;
    }
    .report-header {
        text-align: center; margin-bottom: 40px;
        padding-bottom: 20px; border-bottom: 3px solid #4F46E5;
    }
    .report-header h1 { color: #4F46E5; font-size: 28px; margin-bottom: 8px; }
    .report-header .meta { color: #718096; font-size: 14px; }
    .report-actions {
        text-align: center; margin-bottom: 30px;
    }
    .print-btn {
        background: #4F46E5; color: white; border: none;
        padding: 12px 32px; font-size: 16px; border-radius: 8px;
        cursor: pointer; font-weight: 600;
    }
    .print-btn:hover { background: #3730A3; }
    table {
        width: 100%; border-collapse: collapse; margin-top: 20px;
        background: white; border-radius: 8px; overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    th {
        background: #4F46E5; color: white; padding: 14px 12px;
        text-align: left; font-size: 13px; text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    td { padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    tr:nth-child(even) td { background: #f7fafc; }
    tr:hover td { background: #eef2ff; }
    .num { text-align: right; font-family: 'Courier New', monospace; }
    .positive { color: #16a34a; font-weight: bold; }
    .negative { color: #dc2626; font-weight: bold; }
    .summary {
        margin-top: 30px; padding: 24px; background: white;
        border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
    }
    .summary-item h3 { font-size: 14px; color: #718096; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .summary-item .value { font-size: 22px; font-weight: bold; color: #1a202c; }
    .summary-item .value.positive { color: #16a34a; }
    .summary-item .value.negative { color: #dc2626; }
    .summary-item .value.primary { color: #4F46E5; }
    .footer {
        margin-top: 40px; padding-top: 20px;
        text-align: center; font-size: 12px; color: #a0aec0;
        border-top: 1px solid #e2e8f0;
    }

    @media print {
        .report-actions { display: none; }
        body { padding: 20px; background: white; }
        .summary { box-shadow: none; border: 1px solid #e2e8f0; }
        table { box-shadow: none; border: 1px solid #e2e8f0; }
        th { background: #4F46E5 !important; color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        tr:nth-child(even) td { background: #f7fafc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
</style>
</head>
<body>
<div class=\"report-header\">
    <h1>CryptoMonitor - Portfolio Report</h1>
    <p class=\"meta\">Generated: " . date('Y-m-d H:i:s') . " &middot; " . count($portfolio) . " assets</p>
</div>

<div class=\"report-actions\">
    <button class=\"print-btn\" onclick=\"window.print()\">Print / Save as PDF</button>
</div>

<table>
<thead>
<tr>
    <th>Cryptocurrency</th>
    <th>Symbol</th>
    <th class=\"num\">Quantity</th>
    <th class=\"num\">Purchase Price</th>
    <th class=\"num\">Current Price</th>
    <th class=\"num\">Investment</th>
    <th class=\"num\">Value</th>
    <th class=\"num\">P/L</th>
</tr>
</thead>
<tbody>
$rows
</tbody>
</table>

<div class=\"summary\">
    <div class=\"summary-item\">
        <h3>Total Investment</h3>
        <div class=\"value primary\">$" . number_format($totalInvestment, 2) . "</div>
    </div>
    <div class=\"summary-item\">
        <h3>Current Value</h3>
        <div class=\"value primary\">$" . number_format($totalValue, 2) . "</div>
    </div>
    <div class=\"summary-item\">
        <h3>Overall Profit/Loss</h3>
        <div class=\"value " . ($overallPL >= 0 ? 'positive' : 'negative') . "\">" . ($overallPL >= 0 ? '+' : '') . "$" . number_format($overallPL, 2) . "</div>
    </div>
</div>

<div class=\"footer\">
    CryptoMonitor - Sistema de Monitoramento de Criptomoedas &copy; " . date('Y') . "
</div>
</body>
</html>";
    }
}
