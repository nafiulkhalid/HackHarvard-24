// JavaScript functionality to handle button click and display output
document.getElementById("predict-btn").addEventListener("click", function() {
    // Get the input values
    const keywords = document.getElementById("keywords").value;
    const subtraits = document.getElementById("subtraits").value;

    // Example logic: Simulate enzyme sequence prediction (you will integrate the model later)
    const exampleOutput = "Predicted Sequence: DERNRQSMTIDSYEGEILGEMFICQVDLCSADAADDGEICAHFLLHWTMYYQITQCNKIGPMCTPCDSTCHGNIFMPVLWIYDWMGGGFARGDQRYPCDP...";

    // Display the prediction in the output area
    document.getElementById("output-area").innerHTML = `<p>${exampleOutput}</p>`;

    // Clear previous typewriter text and start the typewriter effect
    document.getElementById("typewriter-text").innerHTML = ""; // Clear previous text
    typeWriter(typewriterText, 'typewriter-text', 100); // Start typewriter effect
});

// Copy functionality for email buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const email = button.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            console.log(`Copied: ${email}`);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    });
});

// Typewriter Effect for Figure Label
const typewriterText = "DERNRQSMTIDSYEGEILGEMFICQVDLCSADAADDGEICAHFLLHWTMYYQITQCNKIGPMCTPCDSTCHGNIFMPVLWIYDWMGGGFARGDQRYPCDP"; // Example label

function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Once typing is done, remove the blinking caret
            document.querySelector('.typewriter-container').classList.add('done-typing');
        }
    }
    type();
}

// Copy functionality for email buttons with "copied" message
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const email = button.getAttribute('data-email');
        
        // Copy the email to the clipboard
        navigator.clipboard.writeText(email).then(() => {
            console.log(`Copied: ${email}`);

            // Create a "Copied" message
            let copiedText = document.createElement('span');
            copiedText.classList.add('copied-text');
            copiedText.innerText = 'Copied';
            
            // Append the copied message to the button
            button.appendChild(copiedText);
            
            // Show and then hide the "Copied" message after 2 seconds
            setTimeout(() => {
                copiedText.style.opacity = 1; // Fade in
                setTimeout(() => {
                    copiedText.style.opacity = 0; // Fade out
                    setTimeout(() => button.removeChild(copiedText), 500); // Remove after fade out
                }, 2000); // 2-second delay
            }, 0);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    });
});

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Toggle dark-mode class for other elements
    document.querySelectorAll('.info-section, .input-section, .output-section, .navbar, .footer, .copy-btn, .navbar-nav .nav-link, .typewriter-container')
        .forEach(element => element.classList.toggle('dark-mode'));

    // Update localStorage with dark mode preference
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Add event listener for the dark mode switch
const darkModeSwitch = document.getElementById("darkModeSwitch");
darkModeSwitch.addEventListener("change", function() {
    toggleDarkMode();
});

// Load dark mode preference on page load
document.addEventListener("DOMContentLoaded", function() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add("dark-mode");
        document.querySelectorAll('.info-section, .input-section, .output-section, .navbar, .footer, .copy-btn, .navbar-nav .nav-link, .typewriter-container')
            .forEach(element => element.classList.add('dark-mode'));
        darkModeSwitch.checked = true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkModeSwitch");

    // Check if dark mode is enabled in localStorage and apply it
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
        darkModeSwitch.checked = true; // Check the switch
    } else {
        disableDarkMode();
    }

    // Add event listener to the switch
    darkModeSwitch.addEventListener("change", function () {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".info-section, .input-section, .output-section, .navbar, .footer, .copy-btn, .navbar-nav .nav-link, .typewriter-container")
            .forEach(element => element.classList.add("dark-mode"));
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        document.querySelectorAll(".info-section, .input-section, .output-section, .navbar, .footer, .copy-btn, .navbar-nav .nav-link, .typewriter-container")
            .forEach(element => element.classList.remove("dark-mode"));
        localStorage.setItem("darkMode", "disabled");
    }
});


window.addEventListener("scroll", function() {
    const title = document.querySelector(".title");
    const inputDataSection = document.querySelector(".input-section").offsetTop;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const imageHeight = document.querySelector(".image-container").offsetHeight;

    if (scrollTop < imageHeight) {
        title.style.transform = `translate(-50%, calc(-50% + ${scrollTop / 2}px))`;
    } else if (scrollTop >= imageHeight && scrollTop < inputDataSection - 100) {
        title.style.transform = `translate(-50%, calc(${scrollTop - imageHeight}px))`;
    }
});


// Add event listener to Learn More button
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const learnMoreContent = document.getElementById("learnMoreContent");

    // Toggle between "Learn More" and "Show Less"
    if (learnMoreContent.classList.contains("show")) {
        // If content is already expanded
        learnMoreBtn.innerHTML = '<i class="bi bi-arrow-down-circle"></i> Learn More';
    } else {
        // If content is collapsed
        learnMoreBtn.innerHTML = '<i class="bi bi-arrow-up-circle"></i> Show Less';
    }

    // Wait for the collapse animation to complete before switching the text
    learnMoreContent.addEventListener('shown.bs.collapse', function () {
        learnMoreBtn.innerHTML = '<i class="bi bi-arrow-up-circle"></i> Show Less';
    });
    
    learnMoreContent.addEventListener('hidden.bs.collapse', function () {
        learnMoreBtn.innerHTML = '<i class="bi bi-arrow-down-circle"></i> Learn More';
    });
});




// Function to set the output based on input (using substring matching)
function setOutputBasedOnInput(inputValue) {
    const outputArea = document.getElementById("output-area");
    const outputImage = document.querySelector(".output-image");
    const typewriterText = document.getElementById("typewriter-text");

    // Clear previous output and image
    outputArea.innerHTML = ""; 
    typewriterText.innerHTML = "";

    // SMILES Sequences
    const smilesSequence1 = "O=[PH](OCC1CCC(N2C=CCC=C2)O1)O[PH](=O)OCC1CCC(n2cnc3cncnc32)O1>>O=[PH](OCC1CCC(n2cnc3cncnc32)O1)O[PH](=O)OCC1CCC([n+]2ccccc2)O1";
    const smilesSequence2 = "O=[PH](OCC1CCC(n2cnc3cncnc32)O1)O[PH](=O)OCC1CCC([n+]2ccccc2)O1>>O=[PH](OCC1CCC(N2C=CCC=C2)O1)O[PH](=O)OCC1CCC(n2cnc3cncnc32)O1";
    const smilesSequence3 = "c1ccccc1>>O=c1ccc2nc3ccccc3oc-2c1";
    const smilesSequence4 = "O=[PH](OCC1CCC(N2C=CCC=C2)O1)O[PH](=O)OCC1CCC(n2cnc3cncnc32)O1>>O=[PH](OCC1CCC(n2cnc3cncnc32)O1)O[PH](=O)OCC1CCC([n+]2ccccc2)O1";
    const smilesSequence5 = "O=c1[nH]cnc2c1ncn2C1CCC(CO[PH](=O)O[PH](=O)OC2CCCCO2)O1>>C1CCC(OCC2OCCCC2OC2CCC(OC3CC(OC4OCCCC4OC4CCCCO4)CC(COC4OCCCC4OC4CCCCO4)O3)CO2)OC1";

    // Check if the input is a substructure of one of the predefined SMILES sequences
    // Check if the input is a substructure of one of the predefined SMILES sequences
    if (smilesSequence1.includes(inputValue)) {
        // 1st input case
        outputArea.innerHTML = `<p>MTATVLLEVPFSARGDRIPDAVAELRTREPIRKVRTITGAEAWLVSSYALCTQVLEDRRFSMKETAAAGAPRLNALTVPPEVVNNMGNIADAGLRKAVMKAITPKAPGLEQFLRDTANSLLDNLITEGAPADLRNDFADPLATALHCKVLGIPQEDGPKLFRSLSIAFMSSADPIPAAKINWDRDIEYMAGILENPNITTGLMGELSRLRKDPAYSHVSDELFATIGVTFFGAGVISTGSFLTTALISLIQRPQLRNLLHEKPELIPAGVEELLRINLSFADGLPRLATADIQVGDVLVRKGELVLVLLEGANFDPEHFPNPGSIELDRPNPTSHLAFGRGQHFCPGSALGRRHAQIGIEALLKKMPGVDLAVPIDQLVWRTRFQRRIPERLPVLW</p>`;
        outputImage.src = "outOne.png"; 
        typeWriter("MTATVLLEVPFSARGDRIPDAVAELRTREPIRKVRTITGAEAWLVSSYALCTQVLEDRRFSMKETAAAGAPRLNALTVPPEVVNNMGNIADAGLRKAVMKAITPKAPGLEQFLRDTANSLLDNLITEGAPADLRNDFADPLATALHCKVLGIPQEDGPKLFRSLSIAFMSSADPIPAAKINWDRDIEYMAGILENPNITTGLMGELSRLRKDPAYSHVSDELFATIGVTFFGAGVISTGSFLTTALISLIQRPQLRNLLHEKPELIPAGVEELLRINLSFADGLPRLATADIQVGDVLVRKGELVLVLLEGANFDPEHFPNPGSIELDRPNPTSHLAFGRGQHFCPGSALGRRHAQIGIEALLKKMPGVDLAVPIDQLVWRTRFQRRIPERLPVLW", "typewriter-text", 50);
    
    } else if (smilesSequence2.includes(inputValue)) {
        // 2nd input case
        outputArea.innerHTML = `<p>MSDLHNESIFITGGGSGLGLALVERFIEEGAQVATLELSAAKVASLRQRFGEHILAVEGNVTCYADYQRAVDQILTRSGKLDCFIGNAGIWDHNASLVNTPAETLETGFHELFNVNVLGYLLGAKACAPALIASEGSMIFTLSNAAWYPGGGGPLYTTSKHAATGLIRQLAYELAPKVRVNGVGPCGMASDLRGPQALGQSETSIMQSLTPEKIAAILPLQFFPQPADFTGPYVMLASRRNNRALSGVMINADAGLAIRGIRHVAAGLDL</p>`;
        outputImage.src = "outTwo.png"; 
        typeWriter("MSDLHNESIFITGGGSGLGLALVERFIEEGAQVATLELSAAKVASLRQRFGEHILAVEGNVTCYADYQRAVDQILTRSGKLDCFIGNAGIWDHNASLVNTPAETLETGFHELFNVNVLGYLLGAKACAPALIASEGSMIFTLSNAAWYPGGGGPLYTTSKHAATGLIRQLAYELAPKVRVNGVGPCGMASDLRGPQALGQSETSIMQSLTPEKIAAILPLQFFPQPADFTGPYVMLASRRNNRALSGVMINADAGLAIRGIRHVAAGLDL", "typewriter-text", 50);
    
    } else if (smilesSequence3.includes(inputValue)) {
        // 3rd input case
        outputArea.innerHTML = `<p>MAVDPFACPMMTMQRKPEVHDAFREAGPVVEVNAPAGGPAWVITDDALAREVLADPRFVKDPDLAPAAWRGVDDGLDIPVPELRPFTLIAVDGEAHRRLRRIHAPAFNPRRLAERTDRIAAIAGRLLTELADASGRSGKPAELIGGFAYHFPLLVICELLGVPVTDPAMAREAVSVLKALGLGGPQSGGGDGTDPAGGVPDTSALESLLLEAVHSARRNDTPTMTRVLYERAQAEFGSVSDDQLVYMITGLIFAGHDTTGSFLGFLLAEVLAGRLAADADEDAVSRFVEEALRYHPPVPYTLWRFAATEVTIGGVRLPRGAPVLVDIEGTNTDGRHHDAPHAFHPDRPSWRRLTFGDGPHYCIGEQLAQLESRTMIGVLRSRFPEARLAVPYDELRWCRKGAQTARLTELPVWLR</p>`;
        outputImage.src = "outThree.png"; 
        typeWriter("MAVDPFACPMMTMQRKPEVHDAFREAGPVVEVNAPAGGPAWVITDDALAREVLADPRFVKDPDLAPAAWRGVDDGLDIPVPELRPFTLIAVDGEAHRRLRRIHAPAFNPRRLAERTDRIAAIAGRLLTELADASGRSGKPAELIGGFAYHFPLLVICELLGVPVTDPAMAREAVSVLKALGLGGPQSGGGDGTDPAGGVPDTSALESLLLEAVHSARRNDTPTMTRVLYERAQAEFGSVSDDQLVYMITGLIFAGHDTTGSFLGFLLAEVLAGRLAADADEDAVSRFVEEALRYHPPVPYTLWRFAATEVTIGGVRLPRGAPVLVDIEGTNTDGRHHDAPHAFHPDRPSWRRLTFGDGPHYCIGEQLAQLESRTMIGVLRSRFPEARLAVPYDELRWCRKGAQTARLTELPVWLR", "typewriter-text", 50);

    } else if (smilesSequence4.includes(inputValue)) {
        // 4th input case
        outputArea.innerHTML = `<p>MKAIIVKPPNAGVQVKDVDEKKLDSYGKIKIRTIYNGICGTDREIVNGKLTLSTLPKGKDFLVLGHEAIGVVEESYHGFSQGDLVMPVNRRGCGICRNCLVGRPDFCETGEFGEAGIHKMDGFMREWWYDDPKYLVKIPKSIEDIGILAQPLADIEKSIEEILEVQKRVPVWTCDDGTLNCRKVLVVGTGPIGVLFTLLFRTYGLEVWMANRREPTEVEQTVIEETKTNYYNSSNGYDKLKDSVGKFDVIIDATGADVNILGNVIPLLGRNGVLGLFGFSTSGSVPLDYKTLQEIVHTNKTIIGLVNGQKPHFQQAVVHLASWKTLYPKAAKMLITKTVSINDEKELLKVLREKEHGEIKIRILWE</p>`;
        outputImage.src = "outFour.png"; 
        typeWriter("MKAIIVKPPNAGVQVKDVDEKKLDSYGKIKIRTIYNGICGTDREIVNGKLTLSTLPKGKDFLVLGHEAIGVVEESYHGFSQGDLVMPVNRRGCGICRNCLVGRPDFCETGEFGEAGIHKMDGFMREWWYDDPKYLVKIPKSIEDIGILAQPLADIEKSIEEILEVQKRVPVWTCDDGTLNCRKVLVVGTGPIGVLFTLLFRTYGLEVWMANRREPTEVEQTVIEETKTNYYNSSNGYDKLKDSVGKFDVIIDATGADVNILGNVIPLLGRNGVLGLFGFSTSGSVPLDYKTLQEIVHTNKTIIGLVNGQKPHFQQAVVHLASWKTLYPKAAKMLITKTVSINDEKELLKVLREKEHGEIKIRILWE", "typewriter-text", 50);

    } else if (smilesSequence5.includes(inputValue)) {
        // 5th input case
        outputArea.innerHTML = `<p>MAAGLRKRGRSGSAAQAEGLCKQWLQRAWQERRLLLREPRYTLLVAACLCLAEVGITFWVIHRVAYTEIDWKAYMAEVEGVINGTYDYTQLQGDTGPLVYPAGFVYIFMGLYYATSRGTDIRMAQNIFAVLYLATLLLVFLIYHQTCKVPPFVFFFMCCASYRVHSIFVLRLFNDPVAMVLLFLSINLLLAQRWGWGCCFFSLAVSVKMNVLLFAPGLLFLLLTQFGFRGALPKLGICAGLQVVLGLPFLLENPSGYLSRSFDLGRQFLFHWTVNWRFLPEALFLHRAFHLALLTAHLTLLLLFALCRWHRTGESILSLLRDPSKRKVPPQPLTPNQIVSTLFTSNFIGICFSRSLHYQFYVWYFHTLPYLLWAMPARWLTHLLRLLVLGLIELSWNTYPSTSCSSAALHICHAVILLQLWLGPQPFPKSTQHSKKAH</p>`;
        outputImage.src = "outFive.png"; 
        typeWriter("MAAGLRKRGRSGSAAQAEGLCKQWLQRAWQERRLLLREPRYTLLVAACLCLAEVGITFWVIHRVAYTEIDWKAYMAEVEGVINGTYDYTQLQGDTGPLVYPAGFVYIFMGLYYATSRGTDIRMAQNIFAVLYLATLLLVFLIYHQTCKVPPFVFFFMCCASYRVHSIFVLRLFNDPVAMVLLFLSINLLLAQRWGWGCCFFSLAVSVKMNVLLFAPGLLFLLLTQFGFRGALPKLGICAGLQVVLGLPFLLENPSGYLSRSFDLGRQFLFHWTVNWRFLPEALFLHRAFHLALLTAHLTLLLLFALCRWHRTGESILSLLRDPSKRKVPPQPLTPNQIVSTLFTSNFIGICFSRSLHYQFYVWYFHTLPYLLWAMPARWLTHLLRLLVLGLIELSWNTYPSTSCSSAALHICHAVILLQLWLGPQPFPKSTQHSKKAH", "typewriter-text", 50);
    }
    else {
        // Default case
        outputArea.innerHTML = `<p>Predicted amino acid sequence will appear here...</p>`;
        outputImage.src = "one.png"; // Default image
        typeWriter("DERNRQSMTIDSYEGEILGEMFICQVDLCSADAADDGEICAHFLLHWTMYYQITQCNKIGPMCTPCDSTCHGNIFMPVLWIYDWMGGGFARGDQRYPCDP", "typewriter-text", 50);
    }
}

// Function to handle input field changes and trigger the appropriate output
document.getElementById("predict-btn").addEventListener("click", function() {
    const inputField = document.getElementById("keywords").value;  // Change this to appropriate input element
    setOutputBasedOnInput(inputField);  // Call the function with the input
});

// Typewriter Effect for Output
function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            document.querySelector('.typewriter-container').classList.add('done-typing');
        }
    }
    type();
}
