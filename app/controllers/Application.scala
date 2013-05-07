package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("소란에서 시작되는 음악 생활 - SORAN"))
  }
  
}