!function($){jQuery.fn.exists=function(){return this.length>0},jQuery.fn.cleanWhitespace=function(){return textNodes=this.contents().filter(function(){return 3==this.nodeType&&!/\S/.test(this.nodeValue)}).remove(),this},$(document).ready(function(){if($(".SpektrixPage p").exists()&&$(".SpektrixPage p").each(function(){$(this).text().trim().length<1&&$(this).children().length<1&&$(this).html("")}),$('.SpektrixPage div[class$="WikiText"], .SpektrixPage div[class$="WikiText"] > div').exists()&&$('.SpektrixPage div[class$="WikiText"], .SpektrixPage div[class$="WikiText"] > div').each(function(){$(this).text().trim().length<1&&$(this).children().length<1&&$(this).html("")}),$("p.ErrorMessage span:empty, div.ErrorMessage span:empty").remove(),$("p.ErrorMessage, div.ErrorMessage, div.InfoMessage").each(function(){$(this).text().trim().length<1&&$(this).children().length<1&&$(this).html("")}),$(".SpektrixPage.EventDetails").exists()&&$("h2.DatesAndTimesHeading").replaceWith('<h1 class="DatesAndTimesHeading">Dates and times</h1>'),$(".SpektrixPage.ChooseSeats").exists()){$(".SpektrixPage.ChooseSeats .PricesContainer .Price").each(function(){var e=$(this).text();$(this).text(e.replace(/\*/g,""))}),$(".SpektrixPage.ChooseSeats .SeatingAreaHeading").prepend('<span class="SeatingAreaHeadingLabel">Showing seating for: </span>'),$(".SpektrixPage.ChooseSeats .SeatingAreaHeading").insertBefore($(".SeatingSelector")),$(".SpektrixPage.ChooseSeats .BestAvailableLink").insertBefore($(".SeatingSelector")),$(".SpektrixPage.ChooseSeats .SeatingAreaInstructions").text("You can pick up to 10 seats per order, for this event.");var e=$(".ErrorPanel li").text();$(".ErrorPanel").html("<span>There was an error. "+e+"</span>"),$(".ErrorPanel").addClass("ErrorMessage").removeClass("ErrorPanel")}if($(".SpektrixPage.EditTickets").exists()){var t=$(".EventName").html();$("h1.EditTicketsHeading").replaceWith('<h1 class="EditTicketsHeading">Choose ticket type</h1>'),$("h1.EditTicketsHeading").append('<span class="booking-for">Booking tickets for: <b>'+t+"</b></span>"),$('a[href*="ChooseSeats"]').addClass("ChangeMySeatsLink"),$("th.Delete").text("Remove")}if($(".SpektrixPage.EditAddress").exists()&&($("h1.AddressEditHeading").replaceWith('<h1 class="AddressEditHeading">Edit address</h1>'),$(".AddressEditInstructions").remove(),$(".SpektrixPage.EditAddress .Container").cleanWhitespace(),$("div.ErrorMessage").remove()),$(".SpektrixPage.Basket2").exists()){if($("dt.Item.Instance").exists()&&$("dt.Item.Instance").each(function(){$(this).find("span").addClass("ItemName");var e=$(this).html();$(this).next("dd").find(".Details").prepend(e),$(this).remove()}),$("dt.Item.Merchandise").exists()&&$("dt.Item.Merchandise").each(function(){$(this).find("span").addClass("ItemName");var e=$(this).html();$(this).next("dd").prepend('<p class="Details">'+e+"</p>"),$(this).remove()}),$("dd.Item.Merchandise .Quantity input").exists()&&$("dd.Item.Merchandise .Quantity input + span").addClass("ValidationError"),$("dt.Item.Donation").exists()&&$("dt.Item.Donation").remove(),$("dd.Item.Membership").exists()&&$("dd.Item.Membership > p:first-child").addClass("Details").wrapInner('<span class="ItemName">'),$("dt.Item.Membership").exists()&&$("dt.Item.Membership").remove(),$("dd.Item.Donation").exists()&&$("dd.Item.Donation > p:first-child").addClass("Details").prepend('<span class="ItemName">Donation</span>'),$(".Savings").exists()&&$(".Savings").insertAfter($(".Savings").next()),$(".PromoCode .Button").attr("value","Apply code"),$(".SpektrixPage.Basket2 .OptionalMessage").remove(),$("dt.Promo").exists()){var i=$("dd.Promo").html();$(".Items").after('<div class="Promo"><h2>You may like to add…</h2>'+i+"</div>"),$("dd.Promo, dt.Promo").remove()}$(".Breakdown .Commission").exists()&&$(".Items").addClass("ItemsWithCommission"),$(".Breakdown .Total .Label").text("Total"),$(".Breakdown .Quantity .Label").text("Quantity"),$(".Breakdown .Commission .Label").text("CMSN")}if($(".SpektrixPage.EventsList").exists()&&$(".SpektrixPage .More_Info").text("Book now"),$(".SpektrixPage.NewAccount").exists()&&($("div.ErrorMessage").remove(),$(".SpektrixPage.NewAccount .Container").cleanWhitespace(),$(".SpektrixPage.NewAccount .View h2.YourDetailsHeading").text("Please enter your details"),$(".SpektrixPage.NewAccount .View h2.YourAddressHeading").text("Please enter your address"),$(".SpektrixPage.NewAccount .View h2.YourPreferencesHeading").text("Please set your preferences"),$(".SpektrixPage.NewAccount .View p.SelectMessage").text("We found these addresses, please choose one.")),$(".SpektrixPage.MyAccount").exists()&&($("h1").prepend($(".Button.Logout").parent()),$(".MyAccountHeading span, .MyDetailsHeading span, .MyAddressesHeading span, .MyPreferencesHeading span, .MyOffersHeading span, .Options a").each(function(){var e=$(this).text();e=e.replace("My","Your"),$(this).text(e)})),$(".SpektrixPage.Donations").exists()&&($(".SpektrixPage.Donations .FundContainer").each(function(){var e=$(this).find(".DonationAmount").detach();$(this).wrapInner("<div class='FundContainerTextContent'></div>"),$(this).append(e)}),$(".SpektrixPage.Donations .DonationAmount input").exists()&&$(".SpektrixPage.Donations .DonationAmount input + span").addClass("ValidationError"),$(".DonationsBlurb h1").replaceWith("<h1>Would you like to make a donation?</h1>"),$(".SpektrixPage.Donations input.ContinueButton").attr("value","Add to basket")),$(".SpektrixPage.Memberships").exists()&&$(".SpektrixPage.Memberships .Membership .WikiText h1, .SpektrixPage.Memberships .Membership .WikiText h2").each(function(){var e=$(this).text();$(this).after("<h3>"+e+"</h3>"),$(this).remove()}),$(".SpektrixPage.GiftAidDeclarationForm").exists()){$('.SpektrixPage.GiftAidDeclarationForm input[type="radio"]').parent().addClass("GiftAidDeclarationFormField");var e=$(".ErrorMessage li").text();$(".ErrorMessage").html("<span>"+e+"</span>"),$(".ErrorMessage").insertAfter(".GiftAidDeclarationFormHeading"),$(".GiftAidDeclarationFormDescription").after('<div class="GiftAidFormSimple"><input type="checkbox" name="GiftAidFormSimpleCheckbox" id="GiftAidFormSimpleCheckbox"><label for="GiftAidFormSimpleCheckbox">Yes! I would like Sheffield Theatres to claim Gift Aid on my donation.</label><p class="GiftAidNote">I want all donations I\'ve made to Sheffield Theatres in the past four years and all donations in future to be treated as Gift Aid donations until I notify you otherwise.</p></div>'),$(".GiftAidDeclarationFormField").addClass("visuallyhidden"),$("#ctl00_ContentPlaceHolder_NoneBox").prop("checked",!0),$(".GiftAidFormSimple input").change(function(){$(this).prop("checked")?$("#ctl00_ContentPlaceHolder_SinceDateBox").prop("checked",!0):$(this).prop("checked")||$("#ctl00_ContentPlaceHolder_NoneBox").prop("checked",!0)}),$(".GiftAidDeclarationFormDescription").after('<p class="GiftAidDeclarationFormDescriptionSimple">Boost your donations by an extra 25p on every £1 with Gift Aid, at no extra cost to you. Sound good?</p>'),$(".GiftAidDeclarationFormDescription").remove()}if($(".SpektrixPage.Checkout").exists()&&($(".SummaryView > .Buttons .Button").attr("value","Edit basket"),$(".TermsAndConditions input").insertBefore(".TermsAndConditions label"),console.log("ok")),$(".SpektrixPage.ChangePassword").exists()&&$(".SpektrixPage.ChangePassword .Container").cleanWhitespace(),$(".SpektrixPage.Error").exists()&&$(".SpektrixPage.Error h2").replaceWith('<h1 class="ErrorHeading">Oops, something went wrong.</h1>'),$(".SpektrixPage.SupplementaryEventsPage").exists()&&($(".SpektrixPage.SupplementaryEventsPage .Event_Text").each(function(){var e=$(this).find("#SimpleSeatingDiv").detach();$(this).wrapInner("<div class='SupplementaryEventDivTextContent'></div>"),$(this).append(e)}),$('.SpektrixPage.SupplementaryEventsPage input[value="Continue To Basket"].Button').attr("value","Continue to basket").wrap('<div class="Buttons"></div>'),$(".SpektrixPage.SupplementaryEventsPage #SimpleSeatingDiv .Button").attr("value","Add to basket")),$(".EventName").exists()){var t=$(".EventName").html();$("h1").append('<span class="booking-for">Booking tickets for <b>'+t+"</b></span>")}})}(jQuery);