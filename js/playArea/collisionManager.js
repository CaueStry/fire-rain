class CollisionManager {
  static checkCollisionCC(collider1, collider2) {
    let distanceX = collider1.x - collider2.x;
    let distanceY = collider1.y - collider2.y;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < collider1.radius + collider2.radius) {
      return true;
    }
    return false;
  }

  static checkCollisionRR(collider1, collider2) {
    if (collider1.x < collider2.x + collider2.width &&
        collider1.x + collider1.width > collider2.x &&
        collider1.y < collider2.y + collider2.height &&
        collider1.height + collider1.y > collider2.y) {
          return true;
    }
    return false;
  }

  static checkCollisionCR(collider1, collider2) {
    let distanceX = Math.abs(collider1.x - collider2.x-collider2.width / 2);
    let distanceY = Math.abs(collider1.y - collider2.y-collider2.height / 2);
    if (distanceX > (collider2.width / 2 + collider1.radius) ||
        distanceY > (collider2.height / 2 + collider1.radius)) {
          return false;
    }

    if (distanceX <= collider2.width / 2 || distanceY <= collider2.height / 2) {
      return true;
    }

    let distanceXCorner = distanceX - collider2.width / 2;
    let distanceYCorner = distanceY - collider2.height / 2;
    if(distanceXCorner * distanceXCorner + distanceYCorner * distanceYCorner <=
      collider1.radius * collider1.radius) {
        return true;
    } else {
      return false;
    }
    return false;
  }
}
