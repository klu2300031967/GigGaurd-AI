# GigGaurd-AI
AI-powered insurance platform that verifies real income loss of delivery workers instead of blindly paying based on weather conditions.

## Problem

Delivery partners like Swiggy, Zomato etc depend on daily earnings.  
But sometimes due to real-world disruptions like rain, floods, pollution, curfews, app issues or area restrictions, they are not able to work properly and lose income.

Most of the existing ideas assume that if it rains, workers lose income and give payout directly.

But in reality:
- Rain usually lasts only few hours (3–4 hours)
- Workers can still deliver in light rain
- Sometimes workers already complete most of their earnings before disruption starts
- Sometimes issues like app failure or curfew also affect earnings even without weather problems

Also in some cases like floods:
- Roads get blocked
- Water fills streets
- Workers cannot even move

So we cannot treat every situation the same way.

---

## Idea

We are building a system which checks **actual income loss**, not just external events.

Our idea is:

- For normal situations (rain, pollution, small disruptions) → check income loss before payout  
- For severe situations (floods, full curfew, complete app shutdown) → give direct payout after verification  

So the system understands different types of disruptions and reacts accordingly.

---

## How it works

1. Worker registers in the system  
2. Worker selects a weekly insurance plan  
3. System stores worker’s average daily earnings  
4. System monitors real-world conditions (weather, pollution, app status, etc.)  

Then system handles two cases:

### Case 1: Normal Disruption

- Check if worker was active  
- Check number of orders completed  
- Check earnings till that time  
- Compare expected vs actual earnings  

If income loss is detected → payout is given  

---

### Case 2: Severe Disruption

Examples:
- Flood  
- Full curfew  
- App completely down  

- Verify if the area is actually affected  
- Check worker location  

If confirmed → direct payout is given  

---

## Example

Case 1:
Worker earned ₹600 before rain  
His normal earning is ₹700  

So loss is small → No payout  

---

Case 2:
Worker earned ₹200  
Heavy rain reduced orders  

Expected = ₹700  
Actual = ₹200  

So loss happened → payout given  

---

Case 3 (Flood / Severe):
Roads are full of water or app is down  
Worker cannot work at all  

→ Direct payout after verification  

---

## Weekly Plan

We follow weekly model because gig workers usually earn weekly.

Basic plan:
₹20 per week → coverage up to ₹500  

Pro plan:
₹40 per week → coverage up to ₹1200  

---

## AI Usage

We are using simple AI logic for:

- Predicting expected earnings (based on past data and weekends)
- Detecting income drop
- Preventing fraud (fake claims, wrong location, duplicate claims)

---

## Tech Stack

Frontend: React  
Backend: Spring Boot  
Database: MySQL  
API: Weather API (or mock data)  

---

## Why this is different

- Not just weather-based payout  
- Checks actual income loss  
- Handles multiple real-world scenarios  
- Handles both partial and full disruption  
- Verifies worker activity  
- Reduces false claims  

---

## Limitation

System depends on external data like weather, location and platform status, which may not always be fully accurate.

To handle this, we use multiple checks before approving payout.

---

## Conclusion

This system focuses on real-world situations.

Instead of treating all disruptions the same,  
we understand different scenarios and check whether the worker actually lost income.

So the payout is fair, realistic and genuine.

EXPLINATION VIDEO - https://youtu.be/IYar2bWeiUo?si=mzcVNZ9Bs6XE-vU_
