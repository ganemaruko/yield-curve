use std::process::{Command, Stdio};

pub trait Executor {
    fn execute(&self) -> Result<String, String>;
}

pub struct ShellExecutor {
    pub shell: String,
}

impl ShellExecutor {
    pub fn execute(&self) {
        let command = self.shell.clone();
        let output = if cfg!(target_os = "windows") {
            let output = Command::new("cmd")
                .args(&["/c", &command])
                .stdout(Stdio::piped())
                .output()
                .expect("failed to execute process");
            println!(
                "コマンドの出力:\n{}",
                String::from_utf8_lossy(&output.stdout)
            );
            // return ;
        } else {
            let output = Command::new(command)
                .output()
                .expect("failed to execute process");
            println!(
                "コマンドの出力:\n{}",
                String::from_utf8_lossy(&output.stdout)
            );
            // return output;
        };

        // Command::new(command) // 実行したいコマンドを指定
        //     .stdin(Stdio::piped())
        //     .stdout(Stdio::piped())
        //     .spawn()
        //     .expect("Failed to spawn child process");
    }
}

mod test {
    use super::ShellExecutor;

    #[test]
    fn test_execute_some_command() {
        let executor = ShellExecutor {
            shell: "dir".to_string(),
        };
        executor.execute();
    }
}
