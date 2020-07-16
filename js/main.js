const firstVideoBtn = document.querySelector('.js-first-video');
const secondVideoBtn = document.querySelector('.js-second-video');

const block = document.querySelector('.js-modal-overlay');

firstVideoBtn.addEventListener('click', openModal);
secondVideoBtn.addEventListener('click', openModal);

block.addEventListener('click', closeModal);


function openModal(e) {
    e.preventDefault();
    block.style.display = 'block';
    creatMurkap(e.target.dataset.links);
}   

function creatMurkap(link) {
    const murkap = `<div class="modal">
        <div class="close-modal" data-close="close">
            <div data-close="close"></div>
        </div>
        <iframe class="video-iframe"
            src="${link}" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; 
            gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>`;
    block.insertAdjacentHTML('afterbegin', murkap);
}

function closeModal(e) {
    console.dir(e.target)
    if(e.target.dataset.close == 'close') {
        block.innerHTML = "";
        block.style.display = 'none';
    }
}



const inputAll = document.querySelectorAll( ".phone-validator" );

inputAll.forEach(input => {
    window.intlTelInput( input, {
        utilsScript: 'js/utils.js',
        defaultCountry: 'auto',
        separateDialCode: true,
        allowDropdown: false,
        customPlaceholder: function ( selectedCountryPlaceholder, selectedCountryData ) {
            return "";
        },
        geoIpLookup: function ( callback ) {
            $.get( "https://ipinfo.io", function () { }, "jsonp" ).always( function ( resp ) {
                var countryCode = ( resp && resp.country ) ? resp.country : "";
                callback( countryCode );
            } );
        },
        nationalMode: false,
        initialCountry: 'auto',
    
        preferredCountries: ['ua', 'ru', 'by', 'kz']
    
    } );
    
    input.addEventListener( 'focus', codeCauntry )
    
    function codeCauntry( e ) {
        const countryData = document.querySelector( '.iti__selected-dial-code' ).textContent;
    
        if ( input.value !== "" ) return;
        input.value = countryData;
    }
})









