#!/usr/bin/python
import requests
import base64
import json
import datetime


###Input arguments
#fileName="void_.ttl"
#branch="Testcase1"
#path_to_void_file_on_disc="test_void.ttl"
#gitToken="your github token "

def pushToGit(fileNameGit, gitBranch, path_to_file_on_disc, gitToken):
    message="Automated update "+str(datetime.datetime.now())
    path="https://api.github.com/repos/EBISPOT/RDF-platform/branches/"+gitBranch

    r=requests.get(path, headers={'Authorization': gitToken})
    rjson=r.json()
    treeurl=rjson['commit']['commit']['tree']['url']
    r2=requests.get(treeurl, headers={'Authorization': gitToken})
    r2json=r2.json()
    sha=None

    for file in r2json['tree']:
        #Found file, get the sha code
        if file['path']==fileNameGit:
            sha=file['sha']

    #if sha is None after the for loop, we did not find the file name!
    if sha is None:
        print "Could not find "+fileNameGit+" in repos 'tree' "
        raise Exception


    with open(path_to_file_on_disc) as data:
        data_as_string=data.read()
        content=base64.b64encode(data_as_string)



    #Gathered all the data, now let's push
    inputdata ={}
    inputdata["path"]=fileNameGit
    inputdata["branch"]=gitBranch
    inputdata["message"]=message
    inputdata["content"]=content
    inputdata["sha"]=str(sha)

    updateURL="https://api.github.com/repos/EBISPOT/RDF-platform/contents/"+fileNameGit
    try:
        rPut=requests.put(updateURL, headers={'Authorization': gitToken}, data=json.dumps(inputdata))
        if rPut.status_code == 404:
            print "Status code 404 when I tried to push - so I raise an error!"
            raise Exception
    except requests.exceptions.RequestException as e:
        print 'Something went wrong! I will print all the information that is available so you can figure out what happend!'
        print rPut
        print rPut.headers
        print rPut.text
        print e


### Calling the function
fileName="void.ttl"
branch="Testcase1"
path_to_void_file_on_disc="XXX_void.ttl"
gitToken="token yourgithubtoken"
print "Let's start pushing stuff to git..."
pushToGit(fileName, branch, path_to_void_file_on_disc, gitToken)
