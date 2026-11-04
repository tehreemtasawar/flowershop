
// ---------- Selecting elements (getElementById / querySelector) ----------
const form = document.querySelector('#order form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const birthYearInput = document.getElementById('birth-year');
const formMessage = document.getElementById('form-message');
const discountMessage = document.getElementById('discount-message');



form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (username !== '' && email !== '') {
        formMessage.textContent =
            `Thank you for visiting, ${username}! We will contact you at ${email}.`;
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill in both your name and email.';
        formMessage.style.color = 'red';
    }

    const birthYear = parseInt(birthYearInput.value);
    const CURRENT_YEAR = 2026;

    if (birthYearInput.value.trim() === '') {
        discountMessage.textContent = '';
    } else if (isNaN(birthYear) || birthYear > CURRENT_YEAR || birthYear < 1900) {
        discountMessage.textContent = 'Please enter a valid birth year (e.g. 2002).';
        discountMessage.style.color = 'red';
    } else {
        const age = CURRENT_YEAR - birthYear;

        if (age <= 25) {
            discountMessage.textContent = `Age ${age}: You qualify for the 10% student discount!`;
            discountMessage.style.color = 'green';
        } else if (age >= 60) {
            discountMessage.textContent = `Age ${age}: You qualify for the 15% senior discount!`;
            discountMessage.style.color = 'green';
        } else {
            discountMessage.textContent = `Age ${age}: No discount available for this age group.`;
            discountMessage.style.color = '#333';
        }
    }
});





const rows = document.querySelectorAll('tbody tr'); 

rows.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#fce4ec';
    });

    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = ''; 
    });
});





const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});







const checkboxes = document.querySelectorAll('.bouquet-check');
const totalText = document.getElementById('total');

function updateTotal() {
    let total = 0;

    checkboxes.forEach((box) => {
        if (box.checked) {
            total += Number(box.dataset.price); 
        }
    });

    totalText.textContent = `Total: Rs. ${total}`;
}

checkboxes.forEach((box) => {
    box.addEventListener('change', updateTotal);
});







const readMoreBtn = document.getElementById('read-more-btn');
const extraText = document.getElementById('extra-text');

readMoreBtn.addEventListener('click', () => {
    extraText.classList.toggle('hidden-text');

    if (extraText.classList.contains('hidden-text')) {
        readMoreBtn.textContent = 'Read More';
    } else {
        readMoreBtn.textContent = 'Read Less';
    }
});





const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selected = btn.dataset.filter; // all / everyday / wedding

        rows.forEach((row) => {
            if (selected === 'all' || row.dataset.category === selected) {
                row.style.display = '';       
            } else {
                row.style.display = 'none';  
            }
        });
    });
});







const statusBanner = document.getElementById('status');
const hour = new Date().getHours();

if (hour >= 8 && hour < 21) {
    statusBanner.textContent = 'We are Open!';
    statusBanner.style.color = 'green';
} else {
    statusBanner.textContent = 'Closed - Open at 8 AM';
    statusBanner.style.color = 'red';
}
statusBanner.style.fontWeight = 'bold';








const notes = document.getElementById('special-notes');
const charCount = document.getElementById('char-count');

notes.addEventListener('input', () => {
    const remaining = 100 - notes.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});
