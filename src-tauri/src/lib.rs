use tauri::{Builder,Manager,State};
use std::sync::Mutex;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Default)]
struct AppData {
    theme: bool
}

#[tauri::command]
fn theme_change(state: State<'_,Mutex<AppData>>) -> bool {
    let mut state = state.lock().unwrap();
    state.theme = !state.theme;
    state.theme
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet,theme_change])
        .setup(|app| {
            app.manage(Mutex::new(AppData::default()));
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
