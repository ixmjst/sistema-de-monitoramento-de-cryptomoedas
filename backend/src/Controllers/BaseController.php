<?php

namespace App\Controllers;

/**
 * Base Controller
 * All controllers extend this class
 */
abstract class BaseController
{
    protected $statusCode = 200;
    protected $response = [];

    public function __construct()
    {
        // Base controller initialization can be placed here.
    }

    protected function success($data = null, $message = 'Success', $statusCode = 200)
    {
        $this->statusCode = $statusCode;
        $this->response = [
            'success' => true,
            'message' => $message,
            'data' => $data
        ];
        $this->sendResponse();
    }

    protected function error($message = 'Error', $statusCode = 400, $errors = null)
    {
        $this->statusCode = $statusCode;
        $this->response = [
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ];
        $this->sendResponse();
    }

    protected function sendResponse()
    {
        http_response_code($this->statusCode);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($this->response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        exit;
    }

    protected function getJsonInput()
    {
        $input = file_get_contents('php://input');
        return json_decode($input, true);
    }

    protected function getQueryParam($key, $default = null)
    {
        return $_GET[$key] ?? $default;
    }

    protected function getHeader($key)
    {
        $key = 'HTTP_' . strtoupper(str_replace('-', '_', $key));
        return $_SERVER[$key] ?? null;
    }

    protected function validateInput($data, $rules)
    {
        $errors = [];

        foreach ($rules as $field => $rule) {
            if ($rule['required'] && empty($data[$field])) {
                $errors[$field] = "The $field field is required.";
            }

            if (!empty($data[$field]) && isset($rule['type'])) {
                $this->validateType($field, $data[$field], $rule['type'], $errors);
            }
        }

        return $errors;
    }

    private function validateType($field, $value, $type, &$errors)
    {
        switch ($type) {
            case 'email':
                if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $errors[$field] = "The $field must be a valid email.";
                }
                break;
            case 'number':
                if (!is_numeric($value)) {
                    $errors[$field] = "The $field must be a number.";
                }
                break;
            case 'string':
                if (!is_string($value)) {
                    $errors[$field] = "The $field must be a string.";
                }
                break;
        }
    }
}
