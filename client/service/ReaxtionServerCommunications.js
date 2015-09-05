/**
 * Created by Praveen on 05-09-2015.
 */

/**
 * Created by Praveen on 21-03-2015.
 */

reaxtion.service('ReaxtionServerCommunicationsService', function ($http, ngDialog) {

    this.getProgrammingLanguages = function (callback) {

        $http.get('http://localhost:3000/language/view_language').
            success(function (response) {

                                   
                    callback(null, response);
                }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
     this.addProgrammingLanguages = function(callback) {
        var method="post";
        var insertUrl="http://localhost:3000/language/add_language";
            var language1={
                "l_id":"L1",
                "lname":"C",
                "videos":[
                    {
                        "video_id":"video1"
                    },
                    {
                        "video_id":"video2"
                    },
                    {
                        "video_id":"video3"
                    }
                ]
            };
            var language2={
                "l_id":"L2",
                "lname":"C++",
                "videos":[
                    {
                        "video_id":"video1"
                    },
                    {
                        "video_id":"video2"
                    },
                    {
                        "video_id":"video3"
                    }
                ]
            };
            var language3={
                "l_id":"L3",
                "lname":"C#",
                "videos":[
                    {
                        "video_id":"video1"
                    },
                    {
                        "video_id":"video2"
                    },
                    {
                        "video_id":"video3"
                    }
                ]
            };
            var language4={
                "l_id":"L4",
                "lname":"Java",
                "videos":[
                    {
                        "video_id":"video1"
                    },
                    {
                        "video_id":"video2"
                    },
                    {
                        "video_id":"video3"
                    }
                ]
            };
            var language5={
                "l_id":"L5",
                "lname":"Javascript",
                "videos":[
                    {
                        "video_id":"video1"
                    },
                    {
                        "video_id":"video2"
                    },
                    {
                        "video_id":"video3"
                    }
                ]
            };
            
            var jsonL1=JSON.stringify(language1);
            var jsonL2=JSON.stringify(language2);
            var jsonL3=JSON.stringify(language3);
            var jsonL4=JSON.stringify(language4);
            var jsonL5=JSON.stringify(language5);
            $http({
                method:method,
                url:insertUrl,
                data:jsonL1,
            }).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log("error");
                console.log(response);
            });
            $http({
                method:method,
                url:insertUrl,
                data:jsonL2,
            }).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log("error");
                console.log(response);
            });
            $http({
                method:method,
                url:insertUrl,
                data:jsonL3,
            }).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log("error");
                console.log(response);
            });
            $http({
                method:method,
                url:insertUrl,
                data:jsonL4,
            }).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log("error");
                console.log(response);
            });
            $http({
                method:method,
                url:insertUrl,
                data:jsonL5,
            }).success(function(response){
                console.log(response);
            }).error(function(response){
                console.log("error");
                console.log(response);
            });
     }   
    }
});