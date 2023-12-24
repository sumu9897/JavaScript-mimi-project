document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let option = document.querySelector('input[name="option"]:checked').value;
    let website = document.getElementById('website').value;

    console.log('Survey Form Submitted:');
    console.log('Age:', age);
    console.log('Address:', address);
    console.log('Option:', option);
    console.log('Website:', website);
});