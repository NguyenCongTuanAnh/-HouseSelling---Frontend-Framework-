var app = angular.module("myApp", []);
app.controller("ctrl", function($scope, $http) {

    $scope.cc = {
        name: "Ten 1",
        tap_Doan: "TD1",
        dia_Chi: "DC1",
        kieu_Nha: "Kieu Nha 1",
        phong_Cach: "Phong Cach 1",
        huong_Nha: "Huong Nha 1",
        dien_Tich: 99,
        phong_Ngu: 99,
        phong_Khach: 99,
        chieu_Cao: 99,
        phong_Ve_Sinh: 99,
        muc_Gia: 99,
        phap_Li: true,
        img: "https://loremflickr.com/640/480/city",
        mo_Ta: "Mo Ta 1",
        id: "2"
    };

    var limit = 8;
    var url = "https://63edbbc85e9f1583bdb501df.mockapi.io/ph19690/Chung_Cu?page=";

    $scope.chungCu = [];

    $http.get(url + 1 + "&&limit=" + limit).then(function(response) {
        $scope.chungCu = response.data;
    });


    $http.get(url).then(function(response) {
        $scope.totalProduct = response.data.length;
        $scope.totalPage = Math.ceil($scope.totalProduct / limit);

    });

    $scope.pageRange = function() {

        var pages = [];
        var pageRange = $scope.totalPage;
        for (let i = 1; i <= pageRange; i++) {
            pages.push(i);

        }

        return pages;
    }

    $scope.change = function(num) {
        $http.get(url + num + "&&limit=" + limit).then(function(response) {
            $scope.chungCu = response.data;
        });

    }

    $scope.display = function(c) {

        //Hien Thi MOdal
        $scope.name = c.name;
        $scope.tap_Doan = c.tap_Doan;
        $scope.dia_Chi = c.dia_Chi;
        $scope.kieu_Nha = c.kieu_Nha;
        $scope.phong_Cach = c.phong_Cach;
        $scope.huong_Nha = c.huong_Nha;
        $scope.dien_Tich = c.dien_Tich;
        $scope.chieu_Cao = c.chieu_Cao;
        $scope.phong_Ngu = c.phong_Ngu;
        $scope.phong_Khach = c.phong_Khach;
        $scope.phong_Ve_Sinh = c.phong_Ve_Sinh;
        $scope.muc_Gia = c.muc_Gia;
        $scope.phap_Li = c.phap_Li;
        $scope.img = c.img;
        $scope.mo_Ta = c.mo_Ta;
        $scope.id = c.id;



        //Hien Thi len Form
        $scope.cc.name = c.name;
        $scope.cc.tap_Doan = c.tap_Doan;
        $scope.cc.dia_Chi = c.dia_Chi;
        $scope.cc.kieu_Nha = c.kieu_Nha;
        $scope.cc.phong_Cach = c.phong_Cach;
        $scope.cc.huong_Nha = c.huong_Nha;
        $scope.cc.dien_Tich = c.dien_Tich;
        $scope.cc.chieu_Cao = c.chieu_Cao;
        $scope.cc.phong_Ngu = c.phong_Ngu;
        $scope.cc.phong_Khach = c.phong_Khach;
        $scope.cc.phong_Ve_Sinh = c.phong_Ve_Sinh;
        $scope.cc.muc_Gia = c.muc_Gia;
        $scope.cc.phap_Li = c.phap_Li;
        $scope.cc.img = c.img;
        $scope.cc.mo_Ta = c.mo_Ta;
        $scope.cc.id = c.id;
        index = c.id;
    }


    var index = -1;
    $scope.removeFunction = function(event, id) {

        event.preventDefault();
        $http.delete("https://63edbbc85e9f1583bdb501df.mockapi.io/ph19690/Chung_Cu/" + id).then(function(response) {
            $scope.chungCu.splice(id, 1);
            alert("Xóa thành công");
            $http.get(url + 1 + "&&limit=" + limit).then(function(response) {
                $scope.chungCu = response.data;
            });
        })


    }



    $scope.addFunction = function(event) {

        event.preventDefault();
        $http.post("https://63edbbc85e9f1583bdb501df.mockapi.io/ph19690/Chung_Cu", $scope.cc).then(function(response) {
            $scope.chungCu.push(response.data);
            alert("Thêm thành công");
        })
    }

    $scope.updateFunction = function(event) {

        event.preventDefault();
        $http.put("https://63edbbc85e9f1583bdb501df.mockapi.io/ph19690/Chung_Cu/" + index, $scope.cc).then(function(response) {
            // $scope.chungCu.push(response.data);
            $http.get(url + 1 + "&&limit=" + limit).then(function(response) {
                $scope.chungCu = response.data;
            });
            alert("Update thành công");
        })
    }

});