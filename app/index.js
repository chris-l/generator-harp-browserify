/*jslint node: true, indent: 2, nomen: true */
'use strict';
var util, path, yeoman, chalk, HarpBrowserifyGenerator;

util = require('util');
path = require('path');
yeoman = require('yeoman-generator');
chalk = require('chalk');


HarpBrowserifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      this.installDependencies({
        callback: function () {
          this.spawnCommand('grunt');
        }.bind(this) // bind the callback to the parent scope
      });
    });
  },

  askFor: function () {
    var done, prompts;

    done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic HarpBrowserify generator.'));

    prompts = [
      {
        name: 'description',
        message: 'What would be the description of your site? (you can add it later on harp.json)',
        default: ''
      },
      {
        name: 'google_analytics',
        message: 'What is your google analytics code? (leave it empty if you don\'t want to use GA - note that you can add it later on harp.json to enable GA anytime.)',
        default: ''
      }
    ];

    this.prompt(prompts, function (props) {
      this.description = props.description;
      this.google_analytics = props.google_analytics;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('js');
    this.mkdir('public');
    this.mkdir('public/css');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_harp.json', 'harp.json');
    this.copy('main.js', 'js/main.js');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('layout.jade', 'public/_layout.jade');
    this.copy('styles.less', 'public/css/styles.less');
    this.copy('index.jade', 'public/index.jade');
    this.copy('404.jade', 'public/404.jade');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = HarpBrowserifyGenerator;
