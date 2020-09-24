let BreakstepHomePage = (function() {

    let openPrivacyPolicyOnPrivacyHash = function(){
        let urlHash = window.location.hash.substr(1);
        let privacyPolicyId = "privacy-policy";
        if(urlHash === privacyPolicyId){
            document.getElementById(privacyPolicyId).click();
        }
    };

    return {
        openPrivacyPolicyOnPrivacyHash: openPrivacyPolicyOnPrivacyHash
    }

}());

window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        BreakstepHomePage.openPrivacyPolicyOnPrivacyHash();
    },1000)
});