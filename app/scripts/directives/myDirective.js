 'use strict';
 import myDirTemplate from './myDirTemplate.html';

 export default () => {

     return {
         template: myDirTemplate,

         scope: {
             item: "=",
         },
         controller: ($scope) => {
             $scope.shouldItemBeChanged = false;
             $scope.tempItem = '';
             $scope.changeItem = () => {
                 $scope.tempItem = $scope.item.text;
                 $scope.shouldItemBeChanged = true;
             };

             $scope.saveItem = () => {
                 $scope.item.text = $scope.tempI;
                 console.log('new Items', $scope.item);
                 $scope.shouldItemBeChanged = false;
             };
         }
     };
 };
