<?php
namespace App\Controllers;

use App\Core\Controller;

class FormController extends Controller {

    /**
     * Handle bulk quote requests.
     */
    public function submitQuote() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('bulk-orders');
        }

        // Honeypot Spam Prevention Check
        if (!empty($_POST['website_spamtrap'])) {
            // Discard spam silently
            $this->redirect('thank-you');
        }

        // Sanitization and input collection
        $name = strip_tags(trim($_POST['name'] ?? ''));
        $org = strip_tags(trim($_POST['org'] ?? ''));
        $phone = strip_tags(trim($_POST['phone'] ?? ''));
        $email = strip_tags(trim($_POST['email'] ?? ''));
        $type = strip_tags(trim($_POST['type'] ?? ''));
        $meals = strip_tags(trim($_POST['meals'] ?? ''));
        $diet = strip_tags(trim($_POST['diet'] ?? ''));
        $location = strip_tags(trim($_POST['location'] ?? ''));
        $message = strip_tags(trim($_POST['message'] ?? ''));

        // Basic verification
        if (empty($name) || empty($phone) || empty($location)) {
            $_SESSION['form_errors'] = "Please fill in all mandatory fields (Name, Phone, Location).";
            $this->redirect('bulk-orders#quote-form');
        }

        // Save Lead to CSV file for client visibility
        $dataDir = __DIR__ . '/../../app/Data';
        if (!is_dir($dataDir)) {
            mkdir($dataDir, 0755, true);
        }

        $leadsFile = $dataDir . '/leads.csv';
        $fileExists = file_exists($leadsFile);
        $file = fopen($leadsFile, 'a');

        if (!$fileExists) {
            fputcsv($file, ['Date', 'Type', 'Name', 'Organization', 'Phone', 'Email', 'Order Frequency', 'Approx Meals', 'Diet Preference', 'Location', 'Message']);
        }

        fputcsv($file, [
            date('Y-m-d H:i:s'),
            'Bulk Quote Request',
            $name,
            $org,
            $phone,
            $email,
            $type,
            $meals,
            $diet,
            $location,
            $message
        ]);
        fclose($file);

        // Success redirect
        $this->redirect('thank-you');
    }

    /**
     * Handle general contact form requests.
     */
    public function submitContact() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('contact');
        }

        // Honeypot Spam Prevention Check
        if (!empty($_POST['website_spamtrap'])) {
            $this->redirect('thank-you');
        }

        // Sanitization and input collection
        $name = strip_tags(trim($_POST['name'] ?? ''));
        $phone = strip_tags(trim($_POST['phone'] ?? ''));
        $email = strip_tags(trim($_POST['email'] ?? ''));
        $subject = strip_tags(trim($_POST['subject'] ?? ''));
        $message = strip_tags(trim($_POST['message'] ?? ''));

        if (empty($name) || empty($phone) || empty($message)) {
            $_SESSION['form_errors'] = "Please fill in all mandatory fields (Name, Phone, Message).";
            $this->redirect('contact');
        }

        // Save Lead to CSV
        $dataDir = __DIR__ . '/../../app/Data';
        if (!is_dir($dataDir)) {
            mkdir($dataDir, 0755, true);
        }

        $leadsFile = $dataDir . '/leads.csv';
        $fileExists = file_exists($leadsFile);
        $file = fopen($leadsFile, 'a');

        if (!$fileExists) {
            fputcsv($file, ['Date', 'Type', 'Name', 'Organization', 'Phone', 'Email', 'Order Frequency', 'Approx Meals', 'Diet Preference', 'Location', 'Message']);
        }

        fputcsv($file, [
            date('Y-m-d H:i:s'),
            'General Contact Form',
            $name,
            '', // Org
            $phone,
            $email,
            $subject, // Saved in order frequency slot
            '', // Approx meals
            '', // Diet preference
            '', // Location
            $message
        ]);
        fclose($file);

        // Success redirect
        $this->redirect('thank-you');
    }
}
