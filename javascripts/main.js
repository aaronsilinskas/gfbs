

$('.exercise-header').click(function () {
    var $this = $(this);
    $this.next().slideToggle(100).promise().done(function () {
        $this.find('span').text(function (_, value) {
            return value == '-' ? '+' : '-'
        });
    });
});