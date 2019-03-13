<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NativeQrCode.aspx.cs" Inherits="KuaiCard.Gateway.Pay.weixin_code.NativeQrCode" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <title></title>
    <script src="../../dll/jquery.js" type="text/javascript"></script>
    <link href="../../images/css2.css" rel="stylesheet" type="text/css" />
    
</head>
<body>
    <form id="form1" runat="server">
      <div class="center">
      <div class="header" id="header"><%=getstring%></div>
      <div>
      <img id="imgcode" runat="server" onclick="return imgcode_onclick()" />
      </div>
     </div>
    </form>
</body>
</html>
