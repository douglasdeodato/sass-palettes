module.exports = function  (grunt) {
	var config = {};


	//all tasks that must be loaded.
	var tasks = [
			,'grunt-contrib-watch'
			,'grunt-contrib-sass'
	];

    			//src ===============================
    			var src;
				config.src = src = {
					 sassMain     	 : 'scss/main.scss',
					 distFolder		 : 'css/dist.css',
					 devFolder		 : 'css/dev.css',
					 sassFolder		 : 'scss/**/*.scss'  
				};



				//Watch ===============================
				config.watch = {
					 scripts: {
					 	files: ["<%= src.sassFolder %>"]
					 	,tasks: ["sass:dist"]
					 }
				}
	
				//Sass ===============================
				var sass;
				config.sass = sass = {};

					//distribution
						sass.dist = {
							options: { 
								style: "compressed",
								noCache: true, 
						        sourcemap: 'none', 
						        update:true
							}
							, files: {
								"<%= src.distFolder %>" : "<%= src.sassMain %>"
							}
						};

					//development env.
						sass.dev = {
							options: { 
								style: "expanded", 
								lineNumber: true,
							}
							, files: {
								"<%= src.devFolder %>" : "<%= src.sassMain %>"
							}
						};

	//Register custom tasks ===============================
	grunt.registerTask('default',['dev']);
	grunt.registerTask('dev', ['sass']);
	grunt.registerTask('dist',['sass:dist']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};