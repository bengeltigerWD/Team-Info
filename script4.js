const groups = {
    "Best Friend Group ": { password: "123", members: ["Alice", "Bob"], bios: { "Alice": "Bio of Alice", "Bob": "Bio of Bob" }},
    "Group B": { password: "456", members: ["Charlie", "Dave"], bios: { "Charlie": "Bio of Charlie", "Dave": "Bio of Dave" }},
    "Group C": { password: "789", members: ["Eve", "Frank"], bios: { "Eve": "Bio of Eve", "Frank": "Bio of Frank" }},
};

let currentGroup = '';

function requestPassword(groupName) {
    currentGroup = groupName;
    document.getElementById("group-name").textContent = groupName;
    document.getElementById("password-prompt").style.display = "block";
}

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === groups[currentGroup].password) {
        document.getElementById("password-prompt").style.display = "none";
        showMembers();
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

function showMembers() {
    const membersList = document.getElementById("members");
    membersList.innerHTML = '';
    groups[currentGroup].members.forEach(member => {
        const li = document.createElement("li");
        li.textContent = member;
        li.onclick = () => showBio(member);
        membersList.appendChild(li);
    });
    document.getElementById("member-list").style.display = "block";
}

function showBio(member) {
    document.getElementById("bio-details").textContent = groups[currentGroup].bios[member];
    document.getElementById("member-list").style.display = "none";
    document.getElementById("member-bio").style.display = "block";
}

function goBack() {
    document.getElementById("password-prompt").style.display = "none";
    document.getElementById("member-list").style.display = "none";
}

function goBackToMembers() {
    document.getElementById("member-bio").style.display = "none";
    document.getElementById("member-list").style.display = "block";
}
