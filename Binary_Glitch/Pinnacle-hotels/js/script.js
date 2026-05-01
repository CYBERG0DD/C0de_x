
function submitReview(event) {
    event.preventDefault();

    const name = document.getElementById('reviewName').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const text = document.getElementById('reviewText').value;

    if (!name || !rating || !text) {
        alert('Please fill in all fields');
        return;
    }

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const today = new Date();
    const date = `${today.getDate()} ${today.toLocaleString('default', { month: 'short' })} ${today.getFullYear()}`;

    const reviewHTML = `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-name">${escapeHtml(name)}</span>
                        <span class="review-date">Today</span>
                    </div>
                    <div class="review-rating">${stars}</div>
                    <div class="review-text">"${escapeHtml(text)}"</div>
                </div>
            `;

    document.getElementById('reviewsList').insertAdjacentHTML('afterbegin', reviewHTML);
    document.getElementById('reviewForm').reset();
    alert('Thank you! Your review has been submitted and is awaiting moderation.');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
