class Scooter {
  static id =0;
  // Scooter code here
  constructor(station,user,scooterId,charge,isBroken){
    this.station =station;
    this.user =user;
    this.scooterId=scooterId;//give scootrer id the id number +=1
    this.charge =charge;
    this.isBroken =isBroken;


  }
}

module.exports = Scooter;
