$('.exercise-header').click(function () {
    var $this = $(this);
    $this.next().slideToggle(100).promise().done(function () {
        $this.find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });
});