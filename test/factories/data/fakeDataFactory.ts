const directories = [
  '/Applications',
  '/bin',
  '/boot',
  '/boot/defaults',
  '/dev',
  '/etc',
  '/etc/defaults',
  '/etc/mail',
  '/etc/namedb',
  '/etc/periodic',
  '/etc/ppp',
  '/home',
  '/home/user',
  '/home/user/dir',
  '/lib',
  '/Library',
  '/lost+found',
  '/media',
  '/mnt',
  '/net',
  '/Network',
  '/opt',
  '/opt/bin',
  '/opt/include',
  '/opt/lib',
  '/opt/sbin',
  '/opt/share',
  '/private',
  '/private/tmp',
  '/private/var',
  '/proc',
  '/rescue',
  '/root',
  '/sbin',
  '/selinux',
  '/srv',
  '/sys',
  '/System',
  '/tmp',
  '/Users',
  '/usr',
  '/usr/X11R6',
  '/usr/bin',
  '/usr/include',
  '/usr/lib',
  '/usr/libdata',
  '/usr/libexec',
  '/usr/local/bin',
  '/usr/local/src',
  '/usr/obj',
  '/usr/ports',
  '/usr/sbin',
  '/usr/share',
  '/usr/src',
  '/var',
  '/var/log',
  '/var/mail',
  '/var/spool',
  '/var/tmp',
  '/var/yp',
];

class FakeSystemDataFactory {
  static directoryPath() {
    // Select a random number of directories
    const numDirs = Math.floor(Math.random() * 3) + 1;
    const dirs = directories.slice(0, numDirs);
    return dirs.join('/');
  }
}

/**
 * A factory for generating fake data modeled on fakerjs.
 */
class FakeDataFactory {
  static system = FakeSystemDataFactory;
}

export default FakeDataFactory;
