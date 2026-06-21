const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('orderModal');
const modalForm = document.querySelector('.modal-form');

// Открыть модальное окно
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку сайта под окном
});

// Закрыть модальное окно
const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку сайта
};

closeModalBtn.addEventListener('click', closeModal);

// Закрытие при клике на темную область вокруг формы
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Обработка отправки формы
modalForm.addEventListener('submit', () => {
    closeModal(); // Закрываем окно
});