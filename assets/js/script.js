//setup

const team = [
    'Luca Agostino',
    'Cristina G.',
    'Giuseppe Vartuli',
    'Leonhard Suli',
    'Paki Bruno',
    'Sarah Elsharkawy'
];

const teamContainerEl = document.getElementById('team');

/**
 * @param {string} member the member name
 * @returns <div> object with classes and member name
 */
function generateMemberCard(member){
      
    //adding a div
      const memberEl = document.createElement('div');
    
      //adding a class to div col-4
      memberEl.classList.add('col-4','tex-center');
      memberEl.append(member);
  
      console.log(memberEl);
      memberEl.addEventListener('click', function(e){
          console.log(this);
  
          this.classList.toggle('bg-primary');
  
      })

    return memberEl;
}

/**
 * 
 * @param {Array} list The list of team members 
 * @param {*} domNode  The DOM element where append the list
 */
function generateTeamCards(list, domNode) {
    for (let i = 0; i < list.length; i++) {
        const member = list[i];

        const memberEl = generateMemberCard(member);

        domNode.appendChild(memberEl)
    }
}


//script
generateTeamCards(team, teamContainerEl);

document.getElementById('add-member').addEventListener('submit', function(e){
    e.preventDefault();

    // console.log('Hello World!');

    
    const newMember = document.getElementById('member').value;
    
    const memberEl = generateMemberCard(newMember);
    
    console.log(newMember);

    teamContainerEl.appendChild(memberEl);

    //cleaning input value
    document.getElementById('member').value = '';


})



