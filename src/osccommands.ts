export interface actionType {
	[key: string]: {
		shortDescription: string
		command: string
		description: string
		args?: string[]
		type: string
		singleUser?: boolean | null
	}
}

const Actions: actionType = {
	Pin: { description: 'Pin', shortDescription: 'Pin', command: '/pin', type: 'User' },
	AddPin: { description: 'Add Pin', shortDescription: 'AddPin', command: '/addPin', type: 'User' },
	Unpin: { description: 'Unpin', shortDescription: 'Unpin', command: '/unPin', type: 'User' },
	ClearPins: {
		description: 'Clear Pins',
		shortDescription: 'ClearPins',
		command: '/me/clearPin',
		singleUser: null,
		type: 'Global',
	},
	TogglePin: {
		description: 'Toggle Pin',
		shortDescription: 'TogglePin',
		command: '/me/togglePin',
		singleUser: null,
		type: 'Global',
	},
	PinScreen2: {
		description: 'Pin Screen2',
		shortDescription: 'PinScreen2',
		command: '/pin2',
		singleUser: true,
		type: 'User',
	},
	UnpinScreen2: {
		description: 'Unpin Screen2',
		shortDescription: 'UnpinScreen2',
		command: '/unPin2',
		singleUser: true,
		type: 'User',
	},
	ClearPinsScreen2: {
		description: 'Clear PinsScreen2',
		shortDescription: 'ClearPinsScreen2',
		command: '/me/clearPin2',
		singleUser: null,
		type: 'Global',
	},
	TogglePinScreen2: {
		description: 'Toggle PinScreen2',
		shortDescription: 'TogglePinScreen2',
		command: '/togglePin2',
		singleUser: true,
		type: 'User',
	},
	Spotlight: {
		description: 'Spotlight',
		shortDescription: 'Spotlight',
		command: '/spot',
		singleUser: true,
		type: 'User',
	},
	AddSpotlight: {
		description: 'Add Spotlight',
		shortDescription: 'AddSpotlight',
		command: '/addSpot',
		singleUser: false,
		type: 'User',
	},
	UnSpotlight: {
		description: 'Un Spotlight',
		shortDescription: 'UnSpotlight',
		command: '/unSpot',
		singleUser: false,
		type: 'User',
	},
	ToggleSpotlight: {
		description: 'Toggle Spotlight',
		shortDescription: 'ToggleSpotlight',
		command: '/toggleSpot',
		singleUser: false,
		type: 'User',
	},
	TurnVideoOn: {
		description: 'Video On',
		shortDescription: 'TurnVideoOn',
		command: '/videoOn',
		singleUser: false,
		type: 'User',
	},
	TurnVideoOff: {
		description: 'Video Off',
		shortDescription: 'TurnVideoOff',
		command: '/videoOff',
		singleUser: false,
		type: 'User',
	},
	ToggleVideoState: {
		description: 'Toggle Video State',
		shortDescription: 'ToggleVideoState',
		command: '/toggleVideo',
		singleUser: false,
		type: 'User',
	},
	Mute: { description: 'Mute', shortDescription: 'Mute', command: '/mute', singleUser: false, type: 'User' },
	Unmute: { description: 'Unmute', shortDescription: 'Unmute', command: '/unMute', singleUser: false, type: 'User' },
	ToggleMuteState: {
		description: 'Toggle Mute State',
		shortDescription: 'ToggleMuteState',
		command: '/toggleMute',
		singleUser: false,
		type: 'User',
	},
	RaiseHand: {
		description: 'Raise Hand',
		shortDescription: 'RaiseHand',
		command: '/raiseHand',
		singleUser: false,
		type: 'User',
	},
	LowerHand: {
		description: 'Lower Hand',
		shortDescription: 'LowerHand',
		command: '/lowerHand',
		singleUser: false,
		type: 'User',
	},
	ToggleHand: {
		description: 'Toggle Hand',
		shortDescription: 'ToggleHand',
		command: '/toggleHand',
		singleUser: false,
		type: 'User',
	},
	MakeHost: {
		description: 'Make Host',
		shortDescription: 'MakeHost',
		command: '/makeHost',
		singleUser: false,
		type: 'User',
	},
	MakeCoHost: {
		description: 'Make CoHost',
		shortDescription: 'MakeCoHost',
		command: '/makeCoHost',
		singleUser: false,
		type: 'User',
	},
	RevokeCoHost: {
		description: 'Revoke CoHost',
		shortDescription: 'RevokeCoHost',
		command: '/revokeCoHost',
		singleUser: false,
		type: 'User',
	},
	ReclaimHost: {
		description: 'Reclaim Host',
		shortDescription: 'ReclaimHost',
		command: '/reclaimHost',
		singleUser: false,
		type: 'User',
	},
	MakePanelist: {
		description: 'Make Panelist',
		shortDescription: 'MakePanelist',
		command: '/makePanelist',
		singleUser: false,
		type: 'User',
	},
	MakeAttendee: {
		description: 'Make Attendee',
		shortDescription: 'MakeAttendee',
		command: '/makeAttendee',
		singleUser: false,
		type: 'User',
	},
	EjectParticipant: {
		description: 'Eject Participant',
		shortDescription: 'EjectParticipant',
		command: '/eject',
		singleUser: false,
		type: 'User',
	},
	ReturnSelfToMainMeeting: {
		description: 'Return Self To Main Meeting',
		shortDescription: 'ReturnSelfToMainMeeting',
		command: '/returnToMainMeeting',
		singleUser: false,
		type: 'User',
	},
	AdmitSomeoneFromWaitingRoom: {
		description: 'Admit Someone From Waiting Room',
		shortDescription: 'AdmitSomeoneFromWaitingRoom',
		command: '/admit',
		singleUser: false,
		type: 'User',
	},
	SendSomeoneToWaitingRoom: {
		description: 'Send Someone To Waiting Room',
		shortDescription: 'SendSomeoneToWaitingRoom',
		command: '/sendToWaitingRoom',
		singleUser: false,
		type: 'User',
	},
	AllowWebinarAttendeeToSpeak: {
		description: 'Allow Webinar Attendee To Speak',
		shortDescription: 'AllowWebinarAttendeeToSpeak',
		command: '/allowToSpeak',
		singleUser: false,
		type: 'User',
	},
	ShutUpWebinarAttendee: {
		description: 'Shut Up Webinar Attendee',
		shortDescription: 'ShutUpWebinarAttendee',
		command: '/disallowToSpeak',
		singleUser: false,
		type: 'User',
	},
	StartScreenShareWithPrimaryScreen: {
		description: 'Share Primary Screen',
		shortDescription: 'StartScreenShareWithPrimaryScreen',
		command: '/me/startScreenSharePrimary',
		singleUser: null,
		type: 'Global',
	},
	CycleSharedCameraToNextAvailable: {
		description: 'Cycle Shared Camera To Next Available',
		shortDescription: 'CycleSharedCameraToNextAvailable',
		command: '/me/shareNextCamera',
		singleUser: null,
		type: 'Global',
	},
	StopSharing: {
		description: 'Stop Sharing',
		shortDescription: 'StopSharing',
		command: '/me/stopShare',
		singleUser: null,
		type: 'Global',
	},
	AllowToRecord: {
		description: 'Allow To Record',
		shortDescription: 'AllowToRecord',
		command: '/allowToRecord',
		singleUser: false,
		type: 'User',
	},
	DisallowToRecord: {
		description: 'Disallow To Record',
		shortDescription: 'DisallowToRecord',
		command: '/disallowToRecord',
		singleUser: false,
		type: 'User',
	},
	GotoNextGalleryPage: {
		description: 'Goto Next Gallery Page',
		shortDescription: 'GotoNextGalleryPage',
		command: '/me/galleryPageNext',
		singleUser: null,
		type: 'Global',
	},
	GotoPreviousGalleryPage: {
		description: 'Goto Previous Gallery Page',
		shortDescription: 'GotoPreviousGalleryPage',
		command: '/me/galleryPagePrev',
		singleUser: null,
		type: 'Global',
	},
	SetSpeakerView: {
		description: 'Set Speaker View',
		shortDescription: 'SetSpeakerView',
		command: '/me/setSpeakerView',
		singleUser: null,
		type: 'Global',
	},
	ShowNonVideoParticipants: {
		description: 'Show Non Video Participants',
		shortDescription: 'ShowNonVideoParticipants',
		command: '/me/showNonVideoParticipants',
		singleUser: null,
		type: 'Global',
	},
	HideNonVideoParticipants: {
		description: 'Hide Non Video Participants',
		shortDescription: 'HideNonVideoParticipants',
		command: '/me/hideNonVideoParticipants',
		singleUser: null,
		type: 'Global',
	},
	ShowUserNamesOnVideo: {
		description: 'Show User Names On Video',
		shortDescription: 'ShowUserNamesOnVideo',
		command: '/me/showUserNames',
		singleUser: null,
		type: 'Global',
	},
	HideUserNamesOnVideo: {
		description: 'Hide User Names On Video',
		shortDescription: 'HideUserNamesOnVideo',
		command: '/me/hideUserNames',
		singleUser: null,
		type: 'Global',
	},
	EnableOriginalSound: {
		description: 'Enable Original Sound',
		shortDescription: 'EnableOriginalSound',
		command: '/enableOriginalSound',
		singleUser: null,
		type: 'User',
	},
	DisableOriginalSound: {
		description: 'Disable Original Sound',
		shortDescription: 'DisableOriginalSound',
		command: '/disableOriginalSound',
		singleUser: null,
		type: 'User',
	},
	EnableHDVideo: {
		description: 'Enable HD Video',
		shortDescription: 'EnableHDVideo',
		command: '/me/enableHDVideo',
		singleUser: null,
		type: 'Global',
	},
	DisableHDVideo: {
		description: 'Disable HD Video',
		shortDescription: 'DisableHDVideo',
		command: '/me/disableHDVideo',
		singleUser: null,
		type: 'Global',
	},
	EnableMirrorVideo: {
		description: 'Enable Mirror Video',
		shortDescription: 'EnableMirrorVideo',
		command: '/enableMirrorVideo',
		singleUser: null,
		type: 'User',
	},
	DisableMirrorVideo: {
		description: 'Disable Mirror Video',
		shortDescription: 'DisableMirrorVideo',
		command: '/disableMirrorVideo',
		singleUser: null,
		type: 'User',
	},
	EnableOptimizeVideoForSharing: {
		description: 'Enable Optimize Video For Sharing',
		shortDescription: 'EnableOptimizeVideoForSharing',
		command: '/me/enableOptimizeVideo',
		singleUser: null,
		type: 'Global',
	},
	DisableOptimizeVideoForSharing: {
		description: 'Disable Optimize Video For Sharing',
		shortDescription: 'DisableOptimizeVideoForSharing',
		command: '/me/disableOptimizeVideo',
		singleUser: null,
		type: 'Global',
	},
	EnableComputerSoundWhenSharing: {
		description: 'Enable Computer Sound When Sharing',
		shortDescription: 'EnableComputerSoundWhenSharing',
		command: '/me/enableComputerSoundWhenSharing',
		singleUser: null,
		type: 'Global',
	},
	DisableComputerSoundWhenSharing: {
		description: 'Disable Computer Sound When Sharing',
		shortDescription: 'DisableComputerSoundWhenSharing',
		command: '/me/disableComputerSoundWhenSharing',
		singleUser: null,
		type: 'Global',
	},
	// RequestMicDeviceList: {
	// 	description: 'Mic Device List',
	// 	shortDescription: 'RequestMicDeviceList',
	// 	command: '/listMicDevices',
	// 	type: 'User',
	// },
	// RequestSpeakerDeviceList: {
	// 	description: 'Speaker Device List',
	// 	shortDescription: 'RequestSpeakerDeviceList',
	// 	command: '/listSpeakerDevices',
	// 	type: 'User',
	// },
	// RequestMicLevel: {
	// 	description: 'Mic Level',
	// 	shortDescription: 'RequestMicLevel',
	// 	command: '/getMicLevel',
	// 	type: 'User',
	// },
	// RequestSpeakerVolume: {
	// 	description: 'Speaker Volume',
	// 	shortDescription: 'RequestSpeakerVolume',
	// 	command: '/getSpeakerVolume',
	// 	type: 'User',
	// },
	// RequestCameraDevices: {
	// 	description: 'Camera Devices',
	// 	shortDescription: 'RequestCameraDevices',
	// 	command: '/listCameraDevices',
	// 	type: 'User',
	// },
	// RequestVirtualBackgroundList: {
	// 	description: 'Virtual Background List',
	// 	shortDescription: 'RequestVirtualBackgroundList',
	// 	command: '/listBackgrounds',
	// 	type: 'User',
	// },
	// RequestCurrentCameraDevice: {
	// 	description: 'Current Camera Device',
	// 	shortDescription: 'RequestCurrentCameraDevice',
	// 	command: '/getCameraDevice',
	// 	type: 'User',
	// },
	// RequestCurrentMicDevice: {
	// 	description: 'Current Mic Device',
	// 	shortDescription: 'RequestCurrentMicDevice',
	// 	command: '/getMicDevice',
	// 	type: 'User',
	// },
	// RequestCurrentSpeakerDevice: {
	// 	description: 'Current Speaker Device',
	// 	shortDescription: 'RequestCurrentSpeakerDevice',
	// 	command: '/getSpeakerDevice',
	// 	type: 'User',
	// },
	// RequestCurrentVirtualBackground: {
	// 	description: 'Current Virtual Background',
	// 	shortDescription: 'RequestCurrentVirtualBackground',
	// 	command: '/getBackground',
	// 	type: 'User',
	// },
	SendParticipantToBreakoutRoom: {
		description: 'Send Participant To BreakoutRoom',
		shortDescription: 'SendParticipantToBreakoutRoom',
		command: '/sendToBreakout',
		singleUser: false,
		type: 'User',
	},
	RemoveParticipantFromBreakoutRoom: {
		description: 'Remove Participant From BreakoutRoom',
		shortDescription: 'RemoveParticipantFromBreakoutRoom',
		command: '/removeFromBreakout',
		type: 'User',
	},
	AssignParticipantToBreakoutRoom: {
		description: 'Assign Participant To BreakoutRoom',
		shortDescription: 'AssignParticipantToBreakoutRoom',
		command: '/assignToBreakout',
		type: 'User',
	},
	UnassignParticipantFromBreakoutRoom: {
		description: 'Unassign Participant From BreakoutRoom',
		shortDescription: 'UnassignParticipantFromBreakoutRoom',
		command: '/unassignFromBreakout',
		type: 'User',
	},
	SetGalleryView: {
		description: 'Set Gallery View',
		shortDescription: 'SetGalleryView',
		command: '/me/setGalleryView',
		singleUser: null,
		type: 'Global',
	},
	MuteAll: {
		description: 'Mute All',
		shortDescription: 'MuteAll',
		command: '/all/mute',
		type: 'Global',
	},
	UnmuteAll: {
		description: 'Unmute All',
		shortDescription: 'UnmuteAll',
		command: '/all/unMute',
		type: 'Global',
	},
	ClearSpotlight: {
		description: 'Clear Spotlight',
		shortDescription: 'ClearSpotlight',
		command: '/clearSpot',
		type: 'Global',
	},
	EnableUsersToUnmute: {
		description: 'Enable Users To Unmute',
		shortDescription: 'EnableUsersToUnmute',
		command: '/enableUsersUnmute',
		type: 'Global',
	},
	DisableUsersToUnmute: {
		description: 'Disable Users ToUnmute',
		shortDescription: 'DisableUsersToUnmute',
		command: '/disableUsersUnmute',
		type: 'Global',
	},
	LowerAllHands: {
		description: 'Lower AllHands',
		shortDescription: 'LowerAllHands',
		command: '/lowerAllHands',
		type: 'Global',
	},
	// RequestBreakoutList: {
	// 	description: 'Request Breakout List',
	// 	shortDescription: 'RequestBreakoutList',
	// 	command: '/listBreakouts',
	// 	type: 'Global',
	// },
	OpenBreakoutRooms: {
		description: 'Open Breakout Rooms',
		shortDescription: 'OpenBreakoutRooms',
		command: '/openBreakouts',
		type: 'Global',
	},
	CloseBreakoutRooms: {
		description: 'Close Breakout Rooms',
		shortDescription: 'CloseBreakoutRooms',
		command: '/closeBreakouts',
		type: 'Global',
	},
	DeleteAllBreakoutRooms: {
		description: 'Delete All Breakout Rooms',
		shortDescription: 'DeleteAllBreakoutRooms',
		command: '/deleteAllBreakouts',
		type: 'Global',
	},
	AdmitEveryoneFromWaitingRoom: {
		description: 'AdmitEveryoneFromWaiting Room',
		shortDescription: 'AdmitEveryoneFromWaitingRoom',
		command: '/admitAll',
		type: 'Global',
	},
	EjectAllWebinarAttendees: {
		description: 'Eject All Webinar Attendees',
		shortDescription: 'EjectAllWebinarAttendees',
		command: '/ejectAttendees',
		type: 'Global',
	},
	StartLocalRecording: {
		description: 'Start Local Recording',
		shortDescription: 'StartLocalRecording',
		command: '/startLocalRecording',
		type: 'Global',
	},
	PauseLocalRecording: {
		description: 'Pause Local Recording',
		shortDescription: 'PauseLocalRecording',
		command: '/pauseLocalRecording',
		type: 'Global',
	},
	ResumeLocalRecording: {
		description: 'Resume Local Recording',
		shortDescription: 'ResumeLocalRecording',
		command: '/resumeLocalRecording',
		type: 'Global',
	},
	StopLocalRecording: {
		description: 'Stop Local Recording',
		shortDescription: 'StopLocalRecording',
		command: '/stopLocalRecording',
		type: 'Global',
	},
	StartCloudRecording: {
		description: 'Start Cloud Recording',
		shortDescription: 'StartCloudRecording',
		command: '/startCloudRecording',
		type: 'Global',
	},
	PauseCloudRecording: {
		description: 'Pause Cloud Recording',
		shortDescription: 'PauseCloudRecording',
		command: '/pauseCloudRecording',
		type: 'Global',
	},
	ResumeCloudRecording: {
		description: 'Resume Cloud Recording',
		shortDescription: 'ResumeCloudRecording',
		command: '/resumeCloudRecording',
		type: 'Global',
	},
	StopCloudRecording: {
		description: 'Stop Cloud Recording',
		shortDescription: 'StopCloudRecording',
		command: '/stopCloudRecording',
		type: 'Global',
	},
	RequestGalleryCount: {
		description: 'Request GalleryCount',
		shortDescription: 'RequestGalleryCount',
		command: '/galCount',
		singleUser: null,
		type: 'Global',
	},
	RequestListOfBreakoutRooms: {
		description: 'Request list of breakout rooms',
		shortDescription: 'RequestListOfBreakoutRooms',
		command: '/listBreakouts',
		singleUser: null,
		type: 'Global',
	},
	LeaveMeeting: {
		description: 'Leave Meeting',
		shortDescription: 'LeaveMeeting',
		command: '/leaveMeeting',
		singleUser: null,
		type: 'Global',
	},
	EndMeeting: {
		description: 'End Meeting',
		shortDescription: 'EndMeeting',
		command: '/endMeeting',
		singleUser: null,
		type: 'Global',
	},
	EnableWaitingRoom: {
		description: 'Enable Waiting Room',
		shortDescription: 'EnableWaitingRoom',
		command: '/enableWaitingRoom',
		singleUser: null,
		type: 'Global',
	},
	DisableWaitingRoom: {
		description: 'Disable Waiting Room',
		shortDescription: 'DisableWaitingRoom',
		command: '/disableWaitingRoom',
		singleUser: null,
		type: 'Global',
	},
	PingZoomOSC: {
		description: 'Ping Zoom OSC',
		shortDescription: 'PingZoomOSC',
		command: '/ping',
		singleUser: null,
		type: 'Special',
	},
	// SetZoomOSCSubscribeLevel: {
	// 	description: 'Set ZoomOSC Subscribe Level',
	// 	shortDescription: 'SetZoomOSCSubscribeLevel',
	// 	command: '/subscribe',
	// 	args: 'subscribeLevel',
	// 	type: 'Special',
	// },
	RequestOrderOfGalleryView: {
		description: 'Request Order Of GalleryView',
		shortDescription: 'RequestOrderOfGalleryView',
		command: '/getGalleryOrder',
		singleUser: null,
		type: 'Special',
	},
	// RequestOrderOfSpotlights: {
	// 	description: 'Request Order Of Spotlights',
	// 	shortDescription: 'RequestOrderOfSpotlights',
	// 	command: '/getSpotOrder',
	// 	type: 'Special',
	// },
	ListUsers: {
		description: 'Request list of users (will be removed)',
		shortDescription: 'ListUsers',
		command: '/list',
		singleUser: null,
		type: 'Special',
	},
	startISOEngine: {
		description: 'Start ISO Engine',
		shortDescription: 'startISOEngine',
		command: '/startISOEngine',
		singleUser: null,
		type: 'ISO',
	},
	stopISOEngine: {
		description: 'Stop ISO Engine',
		shortDescription: 'stopISOEngine',
		command: '/stopISOEngine',
		singleUser: null,
		type: 'ISO',
	},
	pauseISOEngine: {
		description: 'Pause ISO Engine',
		shortDescription: 'pauseISOEngine',
		command: '/pauseISOEngine',
		singleUser: null,
		type: 'ISO',
	},
	addOutput: {
		description: 'addOutput',
		shortDescription: 'addOutput',
		command: '/addOutput',
		singleUser: null,
		type: 'ISO',
	},
	StartCameraShare: {
		description: 'Start CameraShare',
		shortDescription: 'StartCameraShare',
		command: '/me/startCameraShare',
		singleUser: null,
		type: 'Global',
	},
	ConfigureBreakoutRooms: {
		description: 'Configure BreakoutRooms',
		shortDescription: 'configureBreakoutRooms',
		command: '/configureBreakouts',
		singleUser: null,
		type: 'Special',
		args: [
			'postCloseSeconds',
			'allowChooseBreakout',
			'allowReturnAtWill',
			'autoMoveParticipants',
			'useTimer',
			'closeWithTimer',
			'breakoutDurrationSeconds',
		],
	},
	Rename: {
		description: 'Rename',
		shortDescription: 'Rename',
		command: '/rename',
		type: 'User',
		singleUser: true,
		args: ['userName', 'name'],
	},
	setOutputCount: {
		description: 'set Output Count',
		shortDescription: 'setOutputCount',
		command: '/setOutputCount',
		singleUser: null,
		args: ['count'],
		type: 'ISO',
	},
	enableOutput: {
		description: 'enableOutput',
		shortDescription: 'enableOutput',
		command: '/enableOutput',
		singleUser: null,
		args: ['output'],
		type: 'ISO',
	},
	enableOdisableOutpututput: {
		description: 'disableOutput',
		shortDescription: 'disableOutput',
		command: '/disableOutput',
		singleUser: null,
		args: ['output'],
		type: 'ISO',
	},
	loadISOConfig: {
		description: 'loadISOConfig',
		shortDescription: 'loadISOConfig',
		command: '/loadISOConfig',
		singleUser: null,
		args: ['path'],
		type: 'ISO',
	},
	saveISOConfig: {
		description: 'saveISOConfig',
		shortDescription: 'saveISOConfig',
		command: '/saveISOConfig',
		singleUser: null,
		args: ['path'],
		type: 'ISO',
	},
	mergeISOConfig: {
		description: 'mergeISOConfig',
		shortDescription: 'mergeISOConfig',
		command: '/mergeISOConfig',
		singleUser: null,
		args: ['path'],
		type: 'ISO',
	},
	setOutputMode: {
		description: 'setOutputMode',
		shortDescription: 'setOutputMode',
		command: '/setOutputMode',
		singleUser: null,
		args: ['output'],
		type: 'ISO',
	},
	setOutputType: {
		description: 'setOutputType',
		shortDescription: 'setOutputType',
		command: '/setOutputType',
		singleUser: null,
		args: ['output'],
		type: 'ISO',
	},
	setAudioMode: {
		description: 'setAudioMode',
		shortDescription: 'setAudioMode',
		command: '/setAudioMode',
		singleUser: null,
		args: ['channel'],
		type: 'ISO',
	},

	// /getAudioLevel*
	// /zoomosc/audioLevels

	// /getOutputRouting*
	// /zoomosc/outputRouting {int num_outputs, int this_output_num, int enabled (0|1), string output_name, string mode (use string names from dropdown), string selection ("" if nothing, otherwise use string selected), string resolution, string embedded_audio_info, string status}

	// /getAudioRouting*
	// /zoomosc/audioRouting {string audio_device_name, int num_channels, int this_channel, string mode, int gain_reduction, string selection, int audio_level}

	// /zoomosc/videoLoss {int output_num, string output_name, string selection}
	// /zoomosc/videoResume {int output_num, string output_name, string selection}

	setAudioGainReduction: {
		description: 'set Audio Gain Reduction',
		shortDescription: 'setAudioGainReduction',
		command: '/setAudioGainReduction',
		type: 'ISO',
		singleUser: null,
		args: ['channel', 'reduction_amount'],
	},
	setOutputSelection: {
		description: 'set Output Selection',
		shortDescription: 'setOutputSelection',
		command: '/setOutputSelection',
		type: 'ISO',
		singleUser: null,
		args: ['output', 'exact_name_of_selection'],
	},
	setAudioSelection: {
		description: 'set Audio Selection',
		shortDescription: 'setAudioSelection',
		command: '/setAudioSelection',
		type: 'ISO',
		singleUser: null,
		args: ['channel', 'exact_name_of_selection'],
	},
	setOutputEmbeddedAudio: {
		description: 'set Output Embedded Audio',
		shortDescription: 'setOutputEmbeddedAudio',
		command: '/setOutputEmbeddedAudio',
		type: 'ISO',
		singleUser: null,
		args: ['output', 'mode'],
	},
	setVideoLossMode: {
		description: 'set Video Loss Mode',
		shortDescription: 'setVideoLossMode',
		command: '/setVideoLossMode',
		type: 'ISO',
		singleUser: true,
		args: ['loss_mode_name'],
	},
	setOutputName: {
		description: 'set Output Name',
		shortDescription: 'setOutputName',
		command: '/setOutputName',
		type: 'ISO',
		singleUser: true,
		args: ['name'],
	},
	deleteOutput: {
		description: 'delete Output',
		shortDescription: 'deleteOutput',
		command: '/deleteOutput',
		type: 'ISO',
		singleUser: true,
		args: ['output'],
	},
	outputISO: {
		description: 'output ISO',
		shortDescription: 'outputISO',
		command: '/outputISO',
		type: 'ISO',
		singleUser: false,
		args: ['userName', 'output'],
	},
	audioISO: {
		description: 'audio ISO',
		shortDescription: 'audioISO',
		command: '/audioISO',
		type: 'ISO',
		singleUser: true,
		args: ['userName', 'output'],
	},
	SetWindowPosition: {
		description: 'Set Window Position',
		shortDescription: 'SetWindowPosition',
		command: '/setWindowPosition',
		args: ['intX', 'intY'],
		singleUser: true,
		type: 'User',
	},
	SetWindowSize: {
		description: 'Set Window Size',
		shortDescription: 'SetWindowSize',
		command: '/setWindowSize',
		args: ['intX', 'intY'],
		singleUser: true,
		type: 'User',
	},
	SetVirtualBackground: {
		description: 'Set Virtual Background',
		shortDescription: 'SetVirtualBackground',
		command: '/setBackground',
		args: ['id'],
		singleUser: true,
		type: 'User',
	},
	SetVideoFilter: {
		description: 'Set Video Filter',
		shortDescription: 'SetVideoFilter',
		command: '/setVideoFilter',
		args: ['id'],
		singleUser: true,
		type: 'User',
	},
	SetCameraDevice: {
		description: 'Set Camera Device',
		shortDescription: 'SetCameraDevice',
		command: '/setCameraDevice',
		args: ['id'],
		singleUser: true,
		type: 'User',
	},
	SetSpeakerVolume: {
		description: 'Set Speaker Volume',
		shortDescription: 'SetSpeakerVolume',
		command: '/setSpeakerVolume',
		args: ['level'],
		singleUser: false,
		type: 'User',
	},
	SetSpeakerDevice: {
		description: 'Set Speaker Device',
		shortDescription: 'SetSpeakerDevice',
		command: '/setSpeakerDevice',
		args: ['id'],
		singleUser: true,
		type: 'User',
	},
	SetMicDevice: {
		description: 'Set Mic Device',
		shortDescription: 'SetMicDevice',
		command: '/setMicDevice',
		args: ['id'],
		singleUser: true,
		type: 'User',
	},
	SetMicLevel: {
		description: 'Set Mic Level',
		shortDescription: 'SetMicLevel',
		command: '/setMicLevel',
		args: ['level'],
		singleUser: null,
		type: 'User',
	},
	StartShareWithWindow: {
		description: 'Share Window',
		shortDescription: 'StartShareWithWindow',
		command: '/me/startWindowShare',
		args: ['id'],
		singleUser: null,
		type: 'Global',
	},
	StartAudioShare: {
		description: 'Start AudioShare',
		shortDescription: 'StartAudioShare',
		command: '/me/startAudioShare',
		args: ['id'],
		singleUser: null,
		type: 'Global',
	},
	StartScreenShare: {
		description: 'Screen Share',
		shortDescription: 'StartScreenShare',
		command: '/me/startScreenShare',
		args: ['id'],
		singleUser: null,
		type: 'Global',
	},
	SendAChatViaDM: {
		description: 'Chat Via DM',
		shortDescription: 'SendAChatViaDM',
		command: '/chat',
		args: ['msg'],
		singleUser: true,
		type: 'User',
	},
	SendAChatToEveryone: {
		description: 'Send A Chat To Everyone',
		shortDescription: 'SendAChatToEveryone',
		command: '/chatAll',
		args: ['msg'],
		singleUser: null,
		type: 'Global',
	},
	CreateBreakoutRoom: {
		description: 'Create Breakout Room',
		shortDescription: 'CreateBreakoutRoom',
		command: '/createBreakout',
		args: ['name'],
		singleUser: null,
		type: 'Global',
	},
	DeleteBreakoutRoom: {
		description: 'Delete Breakout Room',
		shortDescription: 'DeleteBreakoutRoom',
		command: '/deleteBreakout',
		args: ['name'],
		singleUser: null,
		type: 'Global',
	},
	BroadcastMessageToBreakoutRooms: {
		description: 'Broadcast Message To Breakout Rooms',
		shortDescription: 'BroadcastMessageToBreakoutRooms',
		command: '/broadcastToBreakouts',
		args: ['msg'],
		singleUser: null,
		type: 'Global',
	},
	SendMessageToWaitingRoom: {
		description: 'Send Message To Waiting Room',
		shortDescription: 'SendMessageToWaitingRoom',
		command: '/messageWaitingRoom',
		args: ['msg'],
		singleUser: null,
		type: 'Global',
	},
	JoinMeeting: {
		description: 'Join Meeting',
		shortDescription: 'JoinMeeting',
		command: '/joinMeeting',
		args: ['meetingID', 'name', 'password'],
		singleUser: null,
		type: 'Special',
	},
	ZAKJoinMeeting: {
		description: 'ZAK Join Meeting',
		shortDescription: 'ZAKJoinMeeting',
		command: '/zakJoin',
		args: ['zak', 'meetingID', 'name'],
		singleUser: null,
		type: 'Special',
	},
	ZAKStartMeeting: {
		description: 'ZAK Start Meeting',
		shortDescription: 'ZAKStartMeeting',
		command: '/zakStart',
		args: ['zak', 'meetingID', 'name'],
		singleUser: null,
		type: 'Special',
	},
}
if (module != undefined) module.exports = { Actions }
