#Tooling 
This folder contains files that were created in the process of developing the new infrastructure. They could help people with their process, that is why they are published here. I would recommand to put the dependencies into an virtual environment if you want to keep things clean. 


##github_api
THis file demonstrates how to use the github api to push a file, in our case void file. It works as stand alone, so if you change the parameters in line 63 to 67 to what is fitting for your case, the command 
```python github_api.py```
would do the job. Alternativly (especially if you use python) you could delete/command out these lines and just include the file/phushToGit function in your process, calling the function with the given parameters 
####Dependencies
The function uses python requests libary that you might have to install in order to run it. To install it globally, you can use 
```pip install requests``` 

**NOTE:** In order not to pollute the global python, it is always useful to use a [virtual environment] (http://docs.python-guide.org/en/latest/dev/virtualenvs/), where you pip install your stuff for one project



##qc_void
This script does the quality control of the void file. It checks if the miminamal requirements are satisfied. The platform performs a quality check of the void file before parsing the data. If you include this script in your process you can be sure your VoID file is ready to go. I find the script also useful if you create (hopefully just a first version) of a VoID file by hand, since the script gives you feedback what is going wrong.

To start the script with a certain file, just uncommand the very last line and replace the parameter with the path to your void file! Afterwards 
```python qc_void.py```
should be everything you need!

**NOTE:**Since the platform is work in progress, this quality control check might change in the future a bit. So if -at a certain point in the future - your VoID file is rejected by the platform even though it passes your local test, think about checking here, you might have to update this script!  

####Dependencies
The script uses rdflib which is a rdf libary for python. You need to install it before you can run the script. This can be done with 
```pip install rdflib```
More information you could find [here](https://github.com/RDFLib/rdflib)

**NOTE:** In order not to pollute the global python, it is always useful to use a [virtual environment] (http://docs.python-guide.org/en/latest/dev/virtualenvs/), where you pip install your stuff for one project 
