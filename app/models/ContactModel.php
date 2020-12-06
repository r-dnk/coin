<?php
    class ContactModel{
        private $name;
        private $email;
        private $message;

        public function SetData($name, $email, $message){
            $this->name = $name;
            $this->email = $email;
            $this->message = $message;
        }
        public function validForm() {
            if (strlen($this->name) < 3)
                return "Имя слишком короткое";
            else if (strlen($this->email) < 3)
                return "Email слишком короткий";
            else if (strlen($this->message) < 10)
                return "Сообщение слишком короткое";
            else
                return "Верно";
        }
        public function mail() {
            $to = "illich5930@gmail.com";
            $message = "Имя: " . $this->name . "Сообщение: " . $this->message;
            $subject = "=?utf-8?B?".base64_encode("Сообщение с Cryptic")."?=";
            $headers = "From: $this->email\r\nReply-to: $this->email\r\nContent-type: text/html; charset=utf-8\r\n";
            $success = mail ($to, $subject, $message, $headers);

            if (!$success)
                return "Сообщение не было отправлено";
            else
                return true;
        }
    }