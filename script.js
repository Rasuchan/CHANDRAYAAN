alert = function(message, timeout = null) {
    // Get a reference to the element
    function applyMediaStyles() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            alert.setAttribute('style', `font-size:12px;
            position:fixed;
            top:150px;
            left:10%;
            right:10%;
            padding: 20px;
            border-radius:10px;
            box-shadow:0 10px 5px 0 #00000044;
            background: rgb(19, 12, 46);
            color:#fff;
            display: flex;
            flex-direction:column;
            `);
        }
    }

    // Call the function on page load and when the window is resized
    window.addEventListener('load', applyMediaStyles);
    window.addEventListener('resize', applyMediaStyles);

    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText = 'OK';
    alert.classList.add('alert');
    alert.setAttribute(
        'style',
        `position:fixed;
        top:150px;
        left:20%;
        right:20%;
        padding: 20px;
        border-radius:10px;
        box-shadow:0 10px 5px 0 #00000044;
        background: rgb(19, 12, 46);
        color:#fff;
        display: flex;
        flex-direction:column;
        `
    );
    alertButton.setAttribute('style',
        ` width: 50px;
        height: 40px;
        color: #fff;
        padding: 5px 10px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        border-radius: 5px;
        border: none;
        background-size: 120% auto;
        background-image: linear-gradient(315deg, #43cea2 0%, #185a9d 75%);
        `);
    alert.innerText = message;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e) => {
        alert.remove();
    });
    if (timeout != null) {
        setTimeout(() => {
            alert.remove()
        }, Number(timeout))
    }
    document.body.appendChild(alert);
}

const msg = "📢 Important Update: Hey buddies! Time is running out, and we only have a few more days left to register for the event. Don't miss out on this fantastic opportunity! Hurry up and register now to secure your spot. We can't wait to have you join us! 🎉🏃‍♂️🏃‍♀️ "
alert(msg);


const buttons = document.querySelectorAll('.btnfaq');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})