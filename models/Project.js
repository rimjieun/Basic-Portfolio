import mongoose from 'mongoose';

mongoose.Promise = global.Promise;


const projectSchema = new mongoose.Schema({
  //id
  //name
  //description
  //techs
  //links
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;

