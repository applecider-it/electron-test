document.getElementById('my-button').addEventListener('click', () => {
    const text = document.getElementById('my-input').value;
    window.myAPI.callMainFunction(text);
});