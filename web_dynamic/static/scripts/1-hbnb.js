$(document).ready(function () {
  const amenityCheckboxes = $('.amenities.popover input[type="checkbox"]');

  amenityCheckboxes.on('change', function () {
    const myList = [];

    $.each(amenityCheckboxes, function (index, inputCheckbox) {
      const dataId = $(inputCheckbox).data('id');

      if ($(inputCheckbox).is(':checked')) {
        myList.push(dataId);
      } else {
        const checkIndex = myList.indexOf(dataId);
        if (checkIndex !== -1) {
          // myList.pop();
          myList.splice(checkIndex, 1); // Remove the item from myList using splice
        }
      }
    });

    const h4Amenities = $('.amenities h4');
    h4Amenities.text(myList.join(', '));
  });
});
