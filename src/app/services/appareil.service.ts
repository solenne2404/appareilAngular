

export class AppareilService {
    appareils = [
        {
          id:1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id:2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id:3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status='allumé';
        }
    }

    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status= "éteint";
        }
    }

    switchOnOne(i: number){
      console.log('demande au service')
      this.appareils[i].status = 'allumé';
      console.log('on')
    }

    switchOffOne(i: number){
      console.log('demande au service')
      this.appareils[i].status = 'éteint'
      console.log('off')
    }

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id ;
        }
      );
      return appareil;
    }
}