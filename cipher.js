newString = "aZI love lamp. and TJ helps me alllllll the time it's crazy!!!!"
newCipher = ""

Alph = "abcdefghijklmnopqrstuvwxyz! ,./;'@#$%^&*()~-ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function cipherTxt(string) {
    newArray = [...string]
    newAlph = [...Alph] 
    
    let cipherArr = []
    
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newAlph.length; j++) {
            if (newArray[i] === newAlph[j]) {
                cipherArr.push(Alph[-3 + j])
            }        
        }
    }
    return cipherArr.join("")
}

console.log(cipherTxt(newString))


/* I researched the twitch breach. They breached: 
        - 3 years worth of details regarding creator payouts on Twitch.
        - The entirety of twitch.tv, “with commit history going back to its early beginnings.”
        - Source code for the mobile, desktop, and video game console Twitch clients.
        - Code related to proprietary SDKs and internal AWS services used by Twitch.
        - An unreleased Steam competitor from Amazon Game Studios.
        - Data on other Twitch properties like IGDB and CurseForge.
        - Twitch’s internal security tools.
    The breach was motivated by increasing competition in the space, and to help secure
    future servers. They hackers breached their commit history too, but didn't expose any passwords. 
    The company just seems to be recouping from it and rebuilding its security tools.
*/
