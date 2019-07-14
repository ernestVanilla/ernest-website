export default class Project {

  constructor({name, tldr, color, origin, description, contribution, task, img, 
    imgList, readMoreLink, visitLink }) {
    this.name = name;
    this.tldr = tldr;
    this.color = color;
    this.origin = origin;
    this.description = description;
    this.contribution = contribution;
    this.img = img;
    this.imgList = imgList;
    this.readMoreLink = readMoreLink;
    this.visitLink = visitLink;
  }

  formatSlug() {
    console.log(this.name.replace(' ', '_'));
    return this.name.replace(' ', '_');
  }
}