export default class Project {

  constructor({name, origin, description, contribution, task, img, 
    imgList, readMoreLink, visitLink }) {
    this.name = name;
    this.origin = origin;
    this.description = description;
    this.contribution = contribution;
    this.img = img;
    this.imgList = imgList;
    this.readMoreLink = readMoreLink;
    this.visitLink = visitLink;
  }
}