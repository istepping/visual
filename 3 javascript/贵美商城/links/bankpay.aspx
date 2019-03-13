<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="bankpay.aspx.cs" Inherits="KuaiCard.gateway.links.bankpay" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <meta charset="utf-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <title>在线支付-请选择支付方式</title>
    <link rel="icon" href="/misc/images/ico.ico" type="image/x-icon">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <link rel="stylesheet" type="text/css" href="../css/base.css?v=20141029">
    <link rel="stylesheet" type="text/css" href="../css/common.css?v=20141029">
    <link rel="stylesheet" type="text/css" href="../css/cashier.css?v=20141029">
    <link rel="stylesheet" type="text/css" href="../css/result.css?v=20141029">
     
</head>
<body>
<form id="form1" runat="server">
    <div class="p-header">
        <div class="w">
            <div id="logo">
                <img width="170" height="28" src="../css/i/logo.png" alt="收银台">
            </div>
        </div>
    </div>
    <div class="main">
        <div class="w">
            <!-- order 订单信息 -->
            <div class="order">
                <div class="o-left">
                    <h3 class="o-title">
                        订单提交成功，请您尽快付款！ 订单号：<asp:Literal ID="litUserOrderId" runat="server"></asp:Literal>
                    </h3>
                    <p class="o-tips">
                        请您在提交订单后<span class="font-red">24小时</span>内完成支付，否则订单会自动取消!
                    </p>
                </div>
                <div class="o-right">
                    <div class="o-price">
                        <em>应付金额</em><strong> <asp:Literal ID="litTratAmt" runat="server"></asp:Literal></strong><em>元</em>
                    </div>
                </div>
                <div class="clr">
                </div>
               
            </div>
            <!-- order 订单信息 end -->
            <input type="hidden" autocomplete="off" name="orderShouldPay" id="orderShouldPayHide"
                value="288.00">
            <!-- payment 支付方式选择 -->
            <div class="payment">
                <div class="paybox paybox-baitiao j_paybox" id="baiTiaoDivContainer">
                    <div style="display: none">
                        同步加载白条成功，不需要ajax再请求</div>
                </div>
                <div class="j_paybox" id="payBalancePayboxDiv" style="display: none">
                </div>
                <!-- paybox 银行卡 -->
                <div class="paybox j_paybox paybox-selected" id="payCardBoxDiv">
                    <div class="p-wrap">
                        <i class="p-border"></i>
                        <div class="p-key">
                            <!-- 支付方式选择 -->
                            <span class="p-k-check" id="p-k-check-payCard" onclick="bankCard.checked();" clstag="jr|keycount|cashier_jd|cashier_jd_yhk">
                                <i class="ui-checkbox-L j_paymentCheck" id="ui-checkbox-L-payCard"><em class="selected">
                                </em></i><strong>银行卡</strong> </span>
                            <!-- 支付方式选择 end -->
                        </div>
                        <div class="p-value">
                            <div class="p-v-line" style="height: 35px">
                                <!-- 老用户 已使用 银行卡列表 -->
                                <!-- 老用户 已使用 银行卡列表 end -->
                                <!-- 返回老用户 银行卡列表 -->
                                <div class="bank-return j_returnBankUsed" style="">
                                </div>
                                <!-- 返回老用户 银行卡列表 end -->
                            </div>
                        </div>
                        <div class="p-amount">
                            <em>支付</em><strong id="cardPayAmountStrong"> <asp:Literal ID="litTratAmts" runat="server"></asp:Literal></strong><em>元</em>
                        </div>
                        <!-- 银行卡 区域 -->
                        <div class="bank-area j_bankArea" style="">
                            <!-- bank-identific 银行卡自动识别 -->
                            <!-- bank-identific 银行卡自动识别 end -->
                            <!-- bank-wrap 银行卡选择数据录入区域 -->
                            <div class="bank-wrap j_tabs j_bankEdit" data-widget="tabs" style="opacity: 1;">
                                <div class="ui-tab">
                                    <div class="ui-tab-items">
                                        <ul class="clearfix">
                                            <li class="ui-tab-item bw-tab-wangyin curr" data-widget="tab-item" id="normalPayCardMenuLi"
                                                onclick="bankCard.normalPayCardShow()"><a href="javascript:;">网银支付</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 快捷支付 -->
                                <!-- 快捷支付 end -->
                                <!-- 网银支付 -->
                                <div class="bw-tab-content" data-widget="tab-content" id="normalPayCardDiv" style="">
                                    <!-- 支付银行列表 -->
                                    <div class="payment-list j_eBankList" id="ebankPaymentListDiv">
                                        <ul class="pl-wrap">
                                            <li class="pl-item">
                                             <input type="radio" checked="checked"  name="pd_FrpId" value="967" />
                                                <img align="absmiddle" src="../images/bank/ICBC-NET.png" width="154" height="33" alt="中国工商银行" border="0" />
                                                                          
                                            </li>
                                            <li class="pl-item" >
                                                <input type="radio" name="pd_FrpId" value="965" />
                                                 <img align="absmiddle" src="../images/bank/CCB-NET.png" width="154" height="33" alt="建设银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                            <input type="radio" name="pd_FrpId" value="970" />
                                                <img align="absmiddle" src="../images/bank/CMBCHINA-NET.png" width="154" height="33" alt="中国招商银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                            <input type="radio" name="pd_FrpId" value="964" />
                                                <img align="absmiddle" src="../images/bank/ABC-NET.png" width="154" height="33" alt="中国农业银行" border="0" />
                                            </li>
                                            <li class="pl-item" >
                                               <input type="radio" name="pd_FrpId" value="981" />
                                               <img align="absmiddle" src="../images/bank/BOCO-NET.png" width="154" height="33" alt="交通银行" border="0" />
                                            </li>
                                            <li class="pl-item" >
                                               <input type="radio" name="pd_FrpId" value="985" />
                                               <img align="absmiddle" src="../images/bank/GDB-NET.png" width="154" height="33" alt="广东发展银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                                <input type="radio" name="pd_FrpId" value="963" />
                                                 <img align="absmiddle" src="../images/bank/BOC-NET.png" width="154" height="33" alt="中国银行" border="0" />
                                            </li>
                                            <li class="pl-item" >
                                                 <input type="radio" name="pd_FrpId" value="980" />
                                                 <img align="absmiddle" src="../images/bank/1001009.png" width="154" height="33" alt="中国民生银行民生卡" border="0" />
                                            </li>
                                           
                                            <li class="pl-item">
                                                 <input type="radio" name="pd_FrpId" value="972" />
                                                 <img align="absmiddle" src="../images/bank/CIB-NET.png" width="154" height="33" alt="兴业银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                                <input type="radio" name="pd_FrpId" value="986" />
                                                
                                        <img align="absmiddle" src="../images/bank/CEB-NET.jpg" width="154" height="33" alt="光大银行" border="0" />
                                            </li>
                                            <li class="pl-item" > 
                                            <input type="radio" name="pd_FrpId" value="971" />

                                        <img align="absmiddle" src="../images/bank/POST-NET.png" width="154" height="33"  alt="中国邮政" border="0" />
                                            </li>
                                            <li class="pl-item">
                                                <input type="radio" name="pd_FrpId" value="962" />
                                                        <img align="absmiddle" src="../images/bank/ECITIC-NET.png" width="154" height="33"alt="中信银行" border="0" />
                                            </li>
                                            <li class="pl-item"> 
                                                <input type="radio" name="pd_FrpId" value="977" />

                                        <img align="absmiddle" src="../images/bank/SPDB-NET.png" width="154" height="33" alt="上海浦东发展银行" border="0" />
                                            </li>
                                            <li class="pl-item"> 
                                                <input type="radio" name="pd_FrpId" value="974" />
                                             <img align="absmiddle" src="../images/bank/SDB-NET.png" width="154" height="33" alt="深圳发展银行" border="0" />
                                            </li>
                                            <li class="pl-item"> 
                                             <input type="radio" name="pd_FrpId" value="989" />
                                        <img align="absmiddle" src="../images/bank/BCCB-NET.png" width="154" height="33" alt="北京银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                             <input type="radio" name="pd_FrpId" value="988" />
                                             <img align="absmiddle" src="../images/bank/CBHB-NET.jpg" width="154" height="33"alt="渤海银行 " border="0" />
                                            </li>
                                            <li class="pl-item">
                                                <input type="radio" name="pd_FrpId" value="978" />
                                         <img align="absmiddle" src="../images/bank/PAB-NET.jpg" width="154" height="33" alt="平安银行" border="0" />
                                            </li>
                                            <li class="pl-item">
                                            <input type="radio" name="pd_FrpId" value="979" />
                                        <img align="absmiddle" src="../images/bank/NJCB-NET.jpg" width="154" height="33" alt="南京银行" border="0" />
                                            </li>
                                           
                                            <li class="pl-item">
                                             <input type="radio" name="pd_FrpId" value="997" />
                                        <img align="absmiddle" src="../images/bank/NBCB-NET.jpg" width="154" height="33" alt="宁波银行" border="0" />
                                            </li>
                                            <li class="pl-item"> 
                                                 <input type="radio" name="pd_FrpId" value="990" />
                                        <img align="absmiddle" src="../images/bank/BJRCB-NET.jpg" width="154" height="33" alt="北京农村商业银行" border="0" />
                                            </li>
                                             <li class="pl-item"> 
                                                 <input type="radio" name="pd_FrpId" value="992" checked="checked" />
                                        <img align="absmiddle" src="../images/bank/ALIPAY.gif" width="154" height="33" alt="支付宝" border="0" />
                                            </li>
                                             <li class="pl-item"> 
                                                  <input type="radio" name="pd_FrpId" value="993" checked="checked" />
                                        <img align="absmiddle" src="../images/bank/TENPAY.gif" width="154" height="33" alt="财付通" border="0" />
                                            </li>
                                            <li class="pl-more j_showBankMore" id="j_showBankLi" style="display: none;"><span>更多银行</span>
                                            </li>
                                        </ul>
                                        <div class="bw-more-unionpay" style="display: none;">
                                            如果这里没有您需要的银行，可以尝试&nbsp;<a href="//cashier.jd.com/payment/pay.action?id=4465765857&amp;total=288.00&amp;companyid=6&amp;OrderType=22&amp;toType=10&amp;key=00782BD1FA58EC0CF36E2A2CE0FC05F606B5B24283A7740F90ADC1DAA036E3BF&amp;jump=other">银联在线支付</a>
                                        </div>
                                    </div>
                                  
                <div class="pay-verify" id="pay-verify-typeCredit">
                    <div class="pv-button" id="pv-button-submitPay">
                    <asp:Button ID="btnCmmit" runat="server" Text="确 定" Height="30px" Width="160px" 
                                onclick="btnCmmit_Click"/>           
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
</body>
</html>
