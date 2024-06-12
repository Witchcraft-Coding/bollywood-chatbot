$(function() {
    showDisclaimer();
    $('#selector').on('change', function() {
        clearMessages();
        showDisclaimer();
    });
    $("#input-box").on('keypress', function (e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    $("#send").on('click', function() {
        sendUserMessage();
    });
});