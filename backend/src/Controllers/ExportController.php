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

            // Simple PDF response (requires TCPDF or similar library in production)
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="portfolio_' . date('Y-m-d') . '.pdf"');

            $this->success([
                'message' => 'PDF export requires TCPDF library installation',
                'portfolio_count' => count($portfolio)
            ], 'PDF export feature available with TCPDF');
        } catch (\Exception $e) {
            $this->error('Failed to export PDF: ' . $e->getMessage(), 500);
        }
    }
}
