//function returning function.

function interviewQuestion(job) {
   if (job === 'designer') {
      return function (name) {
         console.log(name + ' can you please tell me what is graphics?');
      }
   }else if (job === 'engineer'){
      return function (name) {
      console.log(name + ' can you tell me which type of engineer you are ?');
      }
   }else{
      return function (name) {
      console.log('What do you do '+ name + '?');
      }
   }
}

var engineerQuestion = interviewQuestion('engineer');

engineerQuestion('Uday');