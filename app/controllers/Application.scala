package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("소란에서 시작되는 음악 생활 - SORAN"))
  }

  def playlist = Action {
    Ok(views.html.playlist("강효준의 플레이리스트 - 소란 SORAN"))
  }
  
}