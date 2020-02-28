// don't @ me about how junk this JS is, I wrote this years ago
document.addEventListener('DOMContentLoaded', function() {
  console.log("We'll miss you D-Rod!!!!");
  const stampedeButton = document.getElementById('trigger');

  const stampede = () => {
    const elephants = $('.elephant');

    elephants.each(function() {
      var elephant = $(this);
      animateElement(elephant);
    });

    dustcloud = $('#dustcloud');
    animateElement(dustcloud);
  };

  const animateElement = element => {
    element.addClass('animate');
    element.one(
      'webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        element.removeClass('animate');
      },
    );
  };

  stampedeButton.addEventListener('click', stampede);
});
