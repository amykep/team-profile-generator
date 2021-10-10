function managerCard(data)
{
    return `

    <div class="flex-item">
            <div class="card-header">
                    <h3>${data.name}</h3>
                    <h4><i class="fas fa-mug-hot" id="icon"></i>Manager</h4>
            </div>

            <div class="card-body">
                <p class="id"> ${data.id}</p>
                <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
                <p class="office">Office Number: ${data.getOfficeNumber()}</p>
            </div>
    </div>
`
}

function internCard(data)
{
    return `

    <div class="flex-item">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4><i class="fas fa-user-graduate" id="icon"></i>Intern</h4>
        </div>

        <div class="card-body">
            <p class="id"> ${data.id}</p>
            <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
            <p class="school">School: ${data.getSchool()}</p>
        </div>
    </div>
`
}

function engineerCard(data)
{
    return `

    <div class="flex-item">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4><i class="fas fa-glasses" id="icon"></i>Engineer</h4>
        </div>

        <div class="card-body">
            <p class="id"> ${data.id}</p>
            <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
        </div>
    </div>

`
}

function generateHTML(arr)
{
    const teamCards = [];

    // console.trace()
    // console.log(arr)
    for (let i = 0; i < arr.length; i++)
    {
        const teamMember = arr[i]

        let card;
        console.log(teamMember.getRole())
        if (teamMember.getRole() === "Manager")
        {
            card = managerCard(teamMember)
        }
        else if (teamMember.getRole() === "Intern")
        {
            // console.log("Intern --", teamMember.getRole())
            card = internCard(teamMember)
        }
        else if (teamMember.getRole() === "Engineer")
        {
            // console.log("Engineer --", teamMember.getRole())
            card = engineerCard(teamMember)
        }

        teamCards.push(card)
        // console.log("teamcards", teamCards)

    }

    return `

    <!DOCTYPE html>

    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!--libraries used-->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    
        <!--style page link-->
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <div class="row justify-content-center" , id="navbar">
                <h1 class="navbar-text" id="navbar-text">My Team</h1>
            </div>
        </header>
        <main>
            <div class="container">
                      <!--Team Cards-->
                      ${teamCards.join(" ")}
                  </div>
          </main>
    </body>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    
    </html>
    `
}
module.exports = generateHTML