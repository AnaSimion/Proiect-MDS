let bugs = [];
const addBug = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let bug = {
        id: Date.now(),
        description: document.getElementById('description').value,
        summary: document.getElementById('summary').value,
        review: document.getElementById('review').value

    }
    bugs.push(bug);
 
    localStorage.setItem('BugList', JSON.stringify(bugs));
    
  

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBug);
  
});

