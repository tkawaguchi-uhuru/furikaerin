module ApplicationHelper
  def id_name_for_body
    "page-#{controller_path.gsub(%r([/_]), '-')}"
  end

  def class_name_for_body
    "page-#{action_name}"
  end
end
