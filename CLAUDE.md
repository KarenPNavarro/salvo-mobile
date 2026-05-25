@AGENTS.md
# Salvō — AI Project Brief for Claude

## What is Salvō
A diamond-shaped BLE personal safety wearable paired with a smartphone app.
When triggered, it instantly alerts up to 5 emergency contacts with live
location, camera feed, and audio. Headquartered in San Juan, Puerto Rico.

## Hardware (Phase 1 Prototype)
- **Device:** Seeed XIAO ESP32-C3 (BLE 5.0, USB-C, 3.3V)
- **Trigger:** Tactile button on breadboard (GPIO D0)
- **Buzzer:** Active piezo 95dB (GPIO D5 via 2N2222 transistor + 1kΩ resistor)
- **BLE Device Name:** SALVO_001
- **BLE Service UUID:** 6e400001-b5a3-f393-e0a9-e50e24dcca9e
- **Alarm Characteristic UUID:** 6e400002-b5a3-f393-e0a9-e50e24dcca9e
- **Alarm Values:** "IDLE" | "ALARM"
- **Firmware:** Arduino IDE, NimBLE-Arduino library
- **Board:** XIAO_ESP32C3, COM3, boot sequence required for upload

## Mobile App
- **Framework:** Expo SDK 56 + React Native (TypeScript)
- **Repo:** https://github.com/KarenPNavarro/salvo-app
- **Navigation:** Expo Router (file-based)
- **Styling:** NativeWind (Tailwind for React Native)
- **Backend:** Supabase (auth, database, storage)
- **BLE:** react-native-ble-plx
- **AI Chatbot:** Anthropic Claude API (Help & Support screen)

## Brand Colors
- Mint: #7de1bd
- Electric Blue: #5131fe  
- Indigo: #1b0067
- Background gradient: dark navy → teal

## App Screens (in order)
### Onboarding Flow
1. Splash
2. Welcome — logo, 3 feature bullets, Get Started / I already have an account
3. Create Account — name, email, phone, password
4. Verify Phone — 6-digit SMS code
5. Permissions — activity recognition, location, notifications, camera, mic
6. Set Up Face ID — biometric for cancelling false alarms

### Setup Flow
7. Emergency Contacts — list, add up to 5
8. Add Contact — name, phone, email, relationship (family/friend/partner/other)
9. Invitation Sent — confirmation screen
10. Connect Device — BLE pairing instructions
11. Pair Device (scanning) — BLE scan animation
12. Pair Device (found) — Salvō Ring ready to pair
13. Device Paired — success confirmation

### Main App (bottom tab navigation)
14. Home — device status, Test Emergency Mode button, location + recording status
15. Device — battery %, signal strength, firmware version
16. Contacts — list with accepted/pending status
17. Settings — profile, alert countdown, safe zones, Face ID, history, notifications

### Emergency Flow
18. Emergency Alert — red screen, 10s countdown, Face ID cancel
19. Emergency Active — recording camera + audio + location, End Alert button
20. Contact Response — tabs for location/camera/chat, Call Now, Call 911

### Support Screens
21. Safe Zones — define locations where alerts auto-disable
22. Help & Support — Claude AI chatbot + help topics
23. Edit Profile — name, email, phone, DOB, emergency note, delete account
24. Notifications — alerts, system messages, mark read
25. Login — email, password, forgot password
26. History — past alert activations and durations
27. Face ID & Passcode — enable/disable biometric + passcode
28. Update Password — old password, new password x2

## Key Product Decisions
- Phase 1 trigger = button press (ring-pull is Phase 2)
- NimBLE-Arduino chosen over stock BLE for memory efficiency
- Expo chosen over bare React Native for beginner-friendly setup
- Supabase chosen for built-in auth + real-time + storage
- Claude API for Help chatbot instead of live chat

## Current Build Status
### ✅ Done
- XIAO ESP32-C3 flashing and working
- BLE firmware broadcasting as SALVO_001
- Alarm button → BLE notification to phone confirmed
- Buzzer confirmed working
- Expo project initialized (SDK 56, TypeScript)

### 🔧 In Progress
- Android Studio emulator setup
- NativeWind + Expo Router installation

### ⬜ Todo
- All app screens (UI)
- BLE connection to SALVO_001
- Emergency alert flow
- Camera + audio recording
- GPS location streaming
- Supabase auth + database
- Push notifications to contacts
- Claude AI chatbot
- 3D printed enclosure
- LiPo battery + TP4056 (ordered)
- RGB LED (need to purchase)

## November Demo Goal
Press button on Salvō device →
App receives BLE alarm →
Red emergency screen appears →
5 contacts notified with location + camera + audio

## Developer Notes
- Karen is a first-time mobile developer
- Step-by-step explanations required
- Windows 11, VSCode, PowerShell
- Arduino IDE COM3, boot sequence: Hold BOOT → press/release RESET → release BOOT
- BLE testing app: nRF Connect for Mobile (iOS)