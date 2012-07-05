#pragma strict

function Start () {

}

//var switchToTarget : Transform;

function Update () {
 if (Input.GetButtonDown("Jump"))
 
  var newTarget = GameObject.Find("Cube").transform;
  GetComponent(Follow).target = newTarget;
  
 // GetComponent(Follow).target = switchToTarget;
}