<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtendo os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validando os dados (simples exemplo)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Enviar email ou salvar no banco de dados
        $to = "seu-email@exemplo.com";
        $subject = "Nova mensagem do seu site";
        $body = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Falha ao enviar a mensagem.";
        }
    } else {
        echo "Por favor, preencha todos os campos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
