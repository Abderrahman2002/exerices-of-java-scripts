    // // // // // 1 -exe1
    // // methode map 
    let nums = [2, 5, 8, 7, 3];

    let nouvNums  = nums.map(num => num*3);

    console.log(nouvNums);

    // // // 1 -exe2

    const personnes = [
        { nom: "ALAMI", age: 33, estMember: true,frais :99 },
        { nom: "FATIHI", age: 24, estMember: false,frais :39 },
        { nom: "RAJI", age: 45, estMember: true,frais :94 },
        { nom: "RAMI", age: 37, estMember: false,frais :73 }
        ];

    let members = personnes
                .filter(personne => personne.estMember)
                .map(member => member.nom)

    // // // function for calculate the total of frais
    function totalFrais(personnes) {
        return personnes.reduce((total,personne) => total + personne.frais, 0);
    }
    console.log(members)
    console.log(totalFrais(personnes)) // This will log the total frais or 'NaN' if the result is not a number

    // //  // 1 -exe3
    const inscriptions = [
        { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
        { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
        { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
        { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
        ];
        
    let pureAppendInscription = (id,nom,filiere)=>inscriptions.concat({id ,nom,filiere})

    let newinscription = pureAppendInscription( 1, 'ALJAMI', 'ID')

    console.log(newinscription)

    //  // 1 -exe4


    let pureInsert = (id, nom, filiere, position) => {
        let newinscriptions = inscriptions.concat();
        newinscriptions.splice(position, 0, { id, nom, filiere });
        console.log(newinscriptions);
    };

    // Example usage
    pureInsert(14, 'NEWNAME', 'NEWFILIERE', 2);



    let pureDeleteByPosition = (position) => {
        let newinscriptions = inscriptions.concat();
        newinscriptions.splice(position, 1);
        console.log(newinscriptions);
    };

    let pureDeleteByID = (id) => {
        let newinscriptions = inscriptions.filter(inscription => inscription.id !== id);
        console.log(newinscriptions);
    };

    let pureUpdateByPosition = (id, nom, filiere, position) => {
        let newinscriptions = inscriptions.concat();
        newinscriptions[position] = { id, nom, filiere };
        console.log(newinscriptions);
    };

    let pureUpdateByID = (id, nom, filiere) => {
        let newinscriptions = inscriptions.map(inscription => 
            inscription.id === id ? { ...inscription, nom, filiere } : inscription
        );
        console.log(newinscriptions);
    };

    // Example usage
    pureInsert(14, 'NEWNAME', 'NEWFILIERE', 2);
    pureDeleteByPosition(1);
    pureDeleteByID(12);
    pureUpdateByPosition(15, 'UPDATEDNAME', 'UPDATEDFILIERE', 0);
    pureUpdateByID(13, 'UPDATEDNAMEBYID', 'UPDATEDFILIEREBYID');




