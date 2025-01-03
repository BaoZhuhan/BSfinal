function submitComment() {
    const name = document.getElementById('comment-name').value;
    const text = document.getElementById('comment-text').value;

    if (name && text) {
        const commentList = document.getElementById('comment-list');
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<h4>${name}</h4><p>${text}</p>`;
        commentList.appendChild(comment);

        // 清空输入框
        document.getElementById('comment-name').value = '';
        document.getElementById('comment-text').value = '';
    } else {
        alert('请填写姓名和评论内容');
    }
}
